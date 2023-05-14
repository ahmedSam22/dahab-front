import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  show = false
  allData:any;
  type:any = 'All';
  startPrice:any =0;
  endPrice:any=6000;
  favs:any;
  constructor(private service:HotelServiceService,private router:Router){
  this.getAllHotels(1)
    }

    getAllHotels(page:number){
      var query:any= {};
      if(this.type) query.type = this.type.toLowerCase();
      if(this.type == 'All') query.type = '';
      if(this.startPrice) query.startPrice = this.startPrice;
      if(this.endPrice) query.endPrice = this.endPrice;
  
      this.service.allHotels(page , query).subscribe((res:any)=>{this.allData = res ;console.log(this.allData);
      this.favs = res['favs'];
      // console.log(this.favs , "favourites");
      
      }
      )
    }

//     filteredHotels(page:number = 1){
//       var query:any= {};
//     if(this.type) query.type = this.type.toLowerCase();
//     if(this.type == 'All') query.type = '';
//     if(this.startPrice) query.startPrice = this.startPrice;
//     if(this.endPrice) query.endPrice = this.endPrice;

//     this.service.filteredHotels(page, query).subscribe((res)=> {this.allData = res ;console.log(this.allData)}
//     )

// console.log(query);
// console.log(this.startPrice);



//     }



}
