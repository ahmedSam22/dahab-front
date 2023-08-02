import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";

import { TransportsService } from "../../transports.service";
import { ViewImageComponent } from "../../activities/view-image/view-image.component";
import getDistance from "geolib/es/getDistance";
import { AddReviewComponent } from "../add-review/add-review.component";

@Component({
  selector: "app-driver-details",
  templateUrl: "./driver-details.component.html",
  styleUrls: ["./driver-details.component.scss"],
})
export class DriverDetailsComponent {
  driver: any;
  id: any;
  currentLocation: any={};
  distance:any;
  reviews:any;

  constructor(
    private service: TransportsService,
    private router: Router,
    private active: ActivatedRoute,
    private dialog: MatDialog
  ) {
    // this.id=this.active.snapshot.paramMap.get("id");
    this.id = this.active.snapshot.paramMap.get("id");
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.currentLocation = pos;
    // });
  }

  ngOnInit() {
    this.driverDetails(this.id);
    this.getMyLocation().then(_=>console.log("done")
    );
    //   console.log(getDistance(
    //     { latitude: 51.5103, longitude: 7.49347 },
    //     { latitude: "51° 31' N", longitude: "7° 28' E" }
    // ) , "lkjihuh");
  }

  async getMyLocation() {
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.currentLocation.lat = pos.coords.latitude ;
        this.currentLocation.lng =pos.coords.longitude ;
      });
      setTimeout(() => {
        console.log(this.currentLocation, "jhuj");
       
      }, 1000)
    
    });
  }

  setDistance(){
    this.distance = +getDistance(
          this.currentLocation,
          this.driver.location
      ) / 1000
      console.log(this.distance , "it's fuckin done ?");
      
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

  viewImage(query: any) {
    let dialogRef = this.dialog.open(ViewImageComponent, {
      data: {
        img: query,
      },
      height: "450px",
      width: "600px",
    });
    // dialogRef.afterClosed().subscribe(e=>this.officeDetaild(this.id))
  }

  driverDetails(id: any) {
    this.service.driverDetails(id).subscribe((res: any) => {
      this.driver = res.data;
      this.driverReviews(id) 
      this.setDistance()
      console.log(this.driver, "here");
    });
  }


  driverReviews(id: any) {
    this.service.driverReviews(id).subscribe((res: any) => {
      this.reviews = res.data.slice(-4).reverse();
      this.setDistance()
      console.log(this.reviews, "here");
    });
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



  addReview() {
    let dialogRef = this.dialog.open(AddReviewComponent, {
      data: {
        driver : this.id
      },
      height: "450px",
      width: "600px",
    });
    dialogRef.afterClosed().subscribe(e=>this.driverDetails(this.id))
  }



}
