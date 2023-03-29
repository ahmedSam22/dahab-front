import { Component } from '@angular/core';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  Cards:any;

constructor(readonly data : StaticDataService){
// console.log(data.Cards);
this.Cards = data.Cards


}
}
