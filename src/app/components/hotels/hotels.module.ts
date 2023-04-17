import { MapComponent } from './../../shared/map/map.component';
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
import { HotelBodyComponent } from './hotel-body/hotel-body.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    HotelsComponent,
    MapComponent,
    AddHotelComponent,
    SideNavComponent,
    HotelCardComponent,
    HotelBodyComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatChipsModule,
    MatSliderModule,


  ]
})
export class HotelsModule { }
