import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: GalleryItem[] = [];

  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      new ImageItem({ src: '../../../../assets/images/hotelsbg.jpg', thumb: '../../../../assets/images/hotelsbg.jpg' }),
      // ... more items
    ];
  }
}
