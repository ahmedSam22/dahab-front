import { Component } from '@angular/core';
import { AddReviewComponent } from '../add-review/add-review.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews:any;
  id:any;
  constructor(private service:ActivitiesService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    }

      ngOnInit(){
        this.officeReviews(this.id)
      }


    officeReviews(id: any , page = 1) {
      this.service.officeReviews(id , page).subscribe((res: any) => {
        this.reviews = res
        console.log(this.reviews , "dkaoji");
        
      });
    }



    addReview() {
      let dialogRef = this.dialog.open(AddReviewComponent, {
        data: {
          office : this.id
        },
        height: "450px",
        width: "600px",
      });
      dialogRef.afterClosed().subscribe(e=>this.officeReviews(this.id))
    }
}
