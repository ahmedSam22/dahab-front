import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-hotel-data',
  templateUrl: './hotel-data.component.html',
  styleUrls: ['./hotel-data.component.scss']
})
export class HotelDataComponent {
  
  hotelData:any;
  id:any;
  constructor(private service:HotelServiceService,private router:Router,private active:ActivatedRoute){
    this.id=this.active.snapshot.paramMap.get("id");
    this.hotelDetaild(this.id)
    }



    hotelDetaild(id: any) {
      this.service.hotelDetails(id).subscribe((res: any) => {
        this.hotelData = res.data;
        console.log(this.hotelData);
      });
    }
}
