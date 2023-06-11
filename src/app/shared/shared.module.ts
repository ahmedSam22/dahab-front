import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './../shared/map/map.component';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';
import { GalleryModule } from  'ng-gallery';
// import { ShowMapComponent } from './show-map/show-map.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShowMapComponent } from 'src/app/shared/show-map/show-map.component';
import { ViewImageComponent } from '../components/activities/view-image/view-image.component';



@NgModule({
  declarations: [
    NavBarComponent,
    GalleryComponent,
    ShowMapComponent,
    ViewImageComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryModule,

    
  ],
  exports: [
    NavBarComponent,
    GalleryComponent,
    ShowMapComponent,
  ]
})
export class SharedModule { }
