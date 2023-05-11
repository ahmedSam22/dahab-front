import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-hotel-data',
  templateUrl: './hotel-data.component.html',
  styleUrls: ['./hotel-data.component.scss']
})
export class HotelDataComponent {
  
  hotelData:any;
  reviews:any;
  id:any;
  constructor(private service:HotelServiceService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    this.hotelDetaild(this.id)
    }



    hotelDetaild(id: any) {
      this.service.hotelDetails(id).subscribe((res: any) => {
        this.hotelData = res.data;
        this.reviews = res.reviews;
        console.log(this.hotelData);
      });
    }


    addReview() {
      let dialogRef = this.dialog.open(AddReviewComponent, {
        data: {
          hotel : this.id
        },
        height: "450px",
        width: "600px",
      });
    }

}
