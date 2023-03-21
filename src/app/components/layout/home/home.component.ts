import { Card, StaticDataService } from './../../../shared/static-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Cards:any;

constructor(readonly data : StaticDataService){
// console.log(data.Cards);
this.Cards = data.Cards


}
}
