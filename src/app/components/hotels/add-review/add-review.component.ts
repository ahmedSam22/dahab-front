import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {


  constructor(private dialog:MatDialogRef<AddReviewComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private service:HotelServiceService){
    console.log(data.hotel);
    
  }
  emoji:any= [
    {src: "assets/emoji/1.png" , value:1 , alt : 'rating img'},
    {src: "assets/emoji/2.png" , value:2 , alt : 'rating img'},
    {src: "assets/emoji/3.png" , value:3 , alt : 'rating img'},
    {src: "assets/emoji/4.png" , value:4 , alt : 'rating img'},
    {src: "assets/emoji/5.png" , value:5 , alt : 'rating img'},
  ]
rate:any;
comment:string = ""

testValue(e:any){
  this.rate = e
  const emojis =  Array.from(document.getElementsByClassName("rating-emoji"));
  emojis.forEach((e:any) => e.classList.remove("selected"))
  emojis[e - 1].classList.add("selected")
}


addReview(){
  var query:any = new Object();
  query.hotel = this.data.hotel
  query.rate = this.rate
  query.text = this.comment
  return this.service.addReview(query).subscribe(async (res:any)=>{
    console.log(res.dialog);
    
    if(await res.status == 200) this.dialog.close()
  })
}

}
