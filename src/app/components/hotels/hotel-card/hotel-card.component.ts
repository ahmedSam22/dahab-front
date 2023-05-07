import { map } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HotelServiceService } from "../hotel-service.service";
import { MapComponent } from "src/app/shared/map/map.component";
import { MatDialog } from "@angular/material/dialog";
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: "app-hotel-card",
  templateUrl: "./hotel-card.component.html",
  styleUrls: ["./hotel-card.component.scss"],
})
export class HotelCardComponent {
  //  carousel = new bootstrap.Carousel('#myCarousel')
  hotelData: any;
  favourite: Boolean = false;

  @Input() data: any;
  @Input() name: any;
  @Input() dist: any;
  @Input() wifi: any;
  @Input() pool: any;
  @Input() pets: any;
  @Input() breakfast: any;
  @Input() type: any;
  @Input() price: any;
  @Input() id: any;
  @Input() lat: any;
  @Input() lng: any;
  @Input() favs: any;

  constructor(
    private service: HotelServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.favs.forEach((element: any) => {
      if (element.hotel_id == this.id) {
        this.favourite = true;
      }
    });
  }



  showMap() {
    let dialogRef = this.dialog.open(MapComponent, {
      data: {
        lat: this.lat,
        lng: this.lng,
      },
      height: "450px",
      width: "600px",
    });
  }

  hotelFavourite(id: any = this.id) {
    this.service.hotelFavourite(id).subscribe((res: any) => {
      this.hotelData = res;
      console.log(this.hotelData);
      this.favourite ? this.favourite = false : this.favourite = true
    });
  }

  disableLike() {
    for (let i = 0; i <= this.favs.length; i++) {
      return this.favs[i].hotel_id == this.id ? true : false;
    }

    // this.favs.forEach((e:any)=>{
    //  return e.hotel_id == this.id ? true : false
    // })
  }
}
