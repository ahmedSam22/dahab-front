import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivitiesService } from '../activities.service';
import { ViewImageComponent } from '../view-image/view-image.component';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {
  activity:any;
  reviews:any;
id:any;
constructor(private service:ActivitiesService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
  // this.id=this.active.snapshot.paramMap.get("id");
  this.id=this.active.snapshot.paramMap.get("id");

}



customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
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
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };


  ngOnInit(){
  this.activityDetails(this.id)
 
  }

  viewImage(query:any) {
    let dialogRef = this.dialog.open(ViewImageComponent, {
      data: {
        img : query
      },
      height: "450px",
      width: "600px",
    });
    // dialogRef.afterClosed().subscribe(e=>this.officeDetaild(this.id))
  }


  activityDetails(id: any) {
    this.service.activityDetails(id).subscribe((res: any) => {
      this.activityReviews(this.id)
      this.activity= res.data;
      console.log(this.activity , 'here');
      
      
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
    dialogRef.afterClosed().subscribe(e=>this.activityDetails(this.id))
  }


  customOptions: OwlOptions = {
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


  activityReviews(id: any) {
    this.service.activityReviews(id,1).subscribe((res: any) => {
      this.reviews= res.data.slice(-4).reverse();

      console.log(this.reviews , 'here');
      
      
    });
  }


}
