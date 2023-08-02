import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HotelServiceService } from "../hotel-service.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.scss"],
})
export class HotelsComponent {
  show = false;
  allData: any = [];
  type: any = "All";
  startPrice: any = 0;
  endPrice: any = 6000;
  favs: any;
  page: any = 1;
  allPages: any;
  constructor(private service: HotelServiceService, private router: Router,private spinner:NgxSpinnerService) {
    this.getAllHotels(this.page);
  }

  getAllHotels(page: number) {
    this.spinner.show()
    var query: any = {};
    if (this.type) query.type = this.type.toLowerCase();
    if (this.type == "All") query.type = "";
    if (this.startPrice) query.startPrice = this.startPrice;
    if (this.endPrice) query.endPrice = this.endPrice;

    this.service.allHotels(page, query).subscribe((res: any) => {
      this.allPages = res.count;
      +res.currentPage <= res.pages && this.page++;
      this.page = this.page + 1;
      if (res.count >= this.allData.length + 1) {
        this.allData.push(...res["data"]);
        console.log(this.allData, "kiashiuasghiuasghuio");
      }

      console.log(res, "lkjiouasgaskl");

      this.favs = res["favs"];
      // console.log(this.favs , "favourites");
    });
    this.spinner.hide()

  }

  onScroll() {
    this.spinner.show()

    if (this.allPages != this.allData.length + 1) {
      this.getAllHotels(this.page);
      console.log(this.page, "scrolled!!");
    }
    this.spinner.hide()

  }

  filterHotels(page: number) {
    this.allData = [];
    this.getAllHotels(page);
  }
}
