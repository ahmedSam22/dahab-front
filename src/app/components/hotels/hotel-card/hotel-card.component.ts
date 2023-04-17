import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  //  carousel = new bootstrap.Carousel('#myCarousel')
  @Input() data:any;

  constructor(){
    // console.log(this.data , "dsaji");
    
  }
  ngOnInit(){
// alert(this.data)
  }

}
