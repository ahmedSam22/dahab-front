import { MapComponent } from './../../shared/map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HotelsComponent,
    MapComponent,
    AddHotelComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class HotelsModule { }
