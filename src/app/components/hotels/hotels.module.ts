import { MapComponent } from './../../shared/map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';


@NgModule({
  declarations: [
    HotelsComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }