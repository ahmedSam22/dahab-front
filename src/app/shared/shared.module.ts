import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './../shared/map/map.component';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';
import { GalleryModule } from  'ng-gallery';
import { ShowMapComponent } from './show-map/show-map.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    NavBarComponent,
    GalleryComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryModule,

    
  ],
  exports: [
    NavBarComponent,
    GalleryComponent,
  ]
})
export class SharedModule { }
