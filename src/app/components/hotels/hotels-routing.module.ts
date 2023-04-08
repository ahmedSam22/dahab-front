import { MapComponent } from './../../shared/map/map.component';
import { LoginComponent } from './../auth/login/login.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"" , component:LoginComponent},
  { path:"add" , component:AddHotelComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
