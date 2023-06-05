import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent {
  show = false
  allData:any;
  constructor(private service:ActivitiesService,private router:Router){
  this.getAllOffices(1)

    }

    getAllOffices(page:number){
      this.service.allOffices(page).subscribe((res:any)=>{this.allData = res ;console.log(this.allData);
      // console.log(this.favs , "favourites");
      }
      )
    }

}
