import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { TransportsService } from '../../transports.service';
import { ViewImageComponent } from '../../activities/view-image/view-image.component';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent {
  driver:any;
id:any;
constructor(private service:TransportsService,private router:Router,private active:ActivatedRoute , private dialog : MatDialog){
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
  this.driverDetails(this.id)
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


  driverDetails(id: any) {
    this.service.driverDetails(id).subscribe((res: any) => {
      this.driver= res.data;

      console.log(this.driver , 'here');
      
      
    });
  }

}
