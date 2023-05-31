import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivitiesService } from '../activities.service';
import { ViewImageComponent } from '../view-image/view-image.component';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {
  activity:any;
id:any;
constructor(private service:ActivitiesService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog,@Inject(MAT_DIALOG_DATA) public data:any){
  // this.id=this.active.snapshot.paramMap.get("id");

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
        items: 4,
      },
    },
    nav: true,
  };


  ngOnInit(){
  this.activityDetails(this.data.activity)
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
      this.activity= res.data;

      console.log(this.activity , 'here');
      
      
    });
  }


}
