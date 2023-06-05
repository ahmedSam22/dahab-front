import { Component } from '@angular/core';
import { TransportsService } from '../../transports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transports-page',
  templateUrl: './transports-page.component.html',
  styleUrls: ['./transports-page.component.scss']
})
export class TransportsPageComponent {
  allData:any;
  constructor(private service:TransportsService,private router:Router){
    this.getAllDrivers(1)
  }

  getAllDrivers(page:number){
    this.service.allDrivers(page).subscribe((res:any)=>{this.allData = res ;console.log(this.allData);
    console.log(this.allData , "favourites");
    }
    )
  }
}
