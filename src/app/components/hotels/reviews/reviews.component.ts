import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews:any;
  id:any;
  constructor(private service:HotelServiceService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    }

      ngOnInit(){
        this.hotelReviews(this.id)
      }


    hotelReviews(id: any , page = 1) {
      this.service.hotelReviews(id , page).subscribe((res: any) => {
        this.reviews = res
        console.log(this.reviews , "dkaoji");
        
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
      dialogRef.afterClosed().subscribe(e=>this.hotelReviews(this.id))
    }
}
