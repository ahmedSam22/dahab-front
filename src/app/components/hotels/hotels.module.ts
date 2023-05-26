import { CarouselModule } from 'ngx-owl-carousel-o';
// import { MapComponent } from './../../shared/map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { HotelDataComponent } from './hotel-data/hotel-data.component';
// import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotelsLayoutComponent } from './hotels-layout/hotels-layout.component';
import { ShowMapComponent } from 'src/app/shared/show-map/show-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    HotelsComponent,
    AddHotelComponent,
    SideNavComponent,
    HotelCardComponent,
    HotelDataComponent,
    HotelsLayoutComponent,
    // MapComponent,
    ShowMapComponent,
    AddReviewComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatChipsModule,
    MatSliderModule,
    MatDialogModule,
    CarouselModule

  ]
})
export class HotelsModule { }
