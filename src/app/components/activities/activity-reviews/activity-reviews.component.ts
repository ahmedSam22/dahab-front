import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-activity-reviews',
  templateUrl: './activity-reviews.component.html',
  styleUrls: ['./activity-reviews.component.scss']
})
export class ActivityReviewsComponent {
  reviews:any;
  id:any;
  constructor(private service:ActivitiesService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    }

      ngOnInit(){
        this.activityReviews(this.id)
      }


    activityReviews(id: any , page:any = 1) {
      this.service.activityReviews(id , page).subscribe((res: any) => {
        this.reviews = res
        console.log(this.reviews , "dkaoji");
        
      });
    }



    addReview() {
      let dialogRef = this.dialog.open(AddReviewComponent, {
        data: {
          activity : this.id
        },
        height: "450px",
        width: "600px",
      });
      dialogRef.afterClosed().subscribe(e=>this.activityReviews(this.id))
    }
}
