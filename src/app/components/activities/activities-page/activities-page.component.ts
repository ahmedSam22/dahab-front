import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent {
  allData:any;
  constructor(private service:ActivitiesService,private router:Router,private spinner:NgxSpinnerService){
    this.getAllActivities(1)
    
  }
  
  getAllActivities(page:number){
    this.spinner.show().then(_=>{
      console.log('kjihu')
      
    })
   this.service.allActivities(page).subscribe((res:any)=>{this.allData = res ;console.log(this.allData);
    console.log(this.allData , "favourites");
    this.spinner.hide()
    }
    )
  }
}
