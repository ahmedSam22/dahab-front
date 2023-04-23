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
  constructor(private service:HotelServiceService,private router:Router){
  this.getAllHotels(1)
    }

    getAllHotels(page:number){
      this.service.allHotels(page).subscribe((res:any)=>{this.allData = res ;console.log(this.allData)}
      )
    }
}
