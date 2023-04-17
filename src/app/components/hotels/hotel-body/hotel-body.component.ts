import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-hotel-body',
  templateUrl: './hotel-body.component.html',
  styleUrls: ['./hotel-body.component.scss']
})
export class HotelBodyComponent {
  allData:any;
  constructor(private service:HotelServiceService,private router:Router){
    this.service.allHotels().subscribe((res:any)=>this.allData = res['data']
    )
    }
}
