import { Component } from '@angular/core';
import { AddReviewComponent } from '../add-review/add-review.component';
import { TransportsService } from '../../transports.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-reviews',
  templateUrl: './driver-reviews.component.html',
  styleUrls: ['./driver-reviews.component.scss']
})
export class DriverReviewsComponent {
  reviews:any;
  id:any;
  constructor(private service:TransportsService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    }

      ngOnInit(){
        this.activityReviews(this.id)
      }


    activityReviews(id: any , page:any = 1) {
      this.service.driverReviews(id , page).subscribe((res: any) => {
        this.reviews = res
        console.log(this.reviews , "dkaoji");
        
      });
    }



    addReview() {
      let dialogRef = this.dialog.open(AddReviewComponent, {
        data: {
          driver : this.id
        },
        height: "450px",
        width: "600px",
      });
      dialogRef.afterClosed().subscribe(e=>this.activityReviews(this.id))
    }
}
