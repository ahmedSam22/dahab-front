import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivitiesService } from '../activities.service';
import { AddReviewComponent } from '../add-review/add-review.component';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.scss']
})
export class OfficeDetailsComponent {
  officeData:any;
  reviews:any;
  activities:any;
  id:any;
  constructor(private service:ActivitiesService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
    this.id=this.active.snapshot.paramMap.get("id");
    this.officeDetails(this.id)
    }



    officeDetails(id: any) {
      this.service.officeDetails(id).subscribe((res: any) => {
        this.officeData = res.data;
        this.activities = res.activities;

        this.reviews = res.reviews.slice(-4).reverse();
        console.log(this.officeData , "data ");
        console.log(this.activities , "activities");
        
        console.log(this.reviews , "reviews");
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
      dialogRef.afterClosed().subscribe(e=>this.officeDetails(this.id))
    }


    customOptions2: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      autoWidth: false,
      dots: true,
      autoplay: false,
      navSpeed: 400,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        740: {
          items: 1,
        },
        940: {
          items: 2,
        },
      },
      nav: true,
    };




    customOptions1: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      autoWidth: false,
      dots: true,
      autoplay: false,
      navSpeed: 400,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        740: {
          items: 1,
        },
        940: {
          items: 3,
        },
      },
      nav: true,
    };



    activityDetails(id:any) {
      let dialogRef = this.dialog.open(ActivityDetailsComponent, {
        data: {
          activity : id
        },
        height: "450px",
        width: "600px",
      });
      dialogRef.afterClosed().subscribe(e=>this.officeDetails(this.id))
    }



}
