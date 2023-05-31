import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent {
  src:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ActivitiesService,private router:Router,private active:ActivatedRoute){
    this.src=this.active.snapshot.paramMap.get("img");
console.log(this.data.img);

  }

}
