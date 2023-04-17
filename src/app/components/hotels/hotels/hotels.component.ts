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
    this.service.allHotels().subscribe((res:any)=>{this.allData = res['data'] ;console.log(this.allData)}
    
    )
    }
}
