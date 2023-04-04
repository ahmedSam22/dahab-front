import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  styles: [
    `
    :host {
      display:block;
      background-color: #09131c;
    }
  `,
  ],
  
})
export class LandingPageComponent {
constructor(){
  
}
}
