import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-hotels',
  templateUrl: './landing-hotels.component.html',
  styleUrls: ['./landing-hotels.component.scss']
})
export class LandingHotelsComponent {
  constructor(private router:Router){
    // console.log(localStorage.getItem('userData') ? 'yes' : 'no');
    
    // localStorage.getItem('userData') ? 'yes' : this.router.navigate(['/auth/login'])

  }
}
