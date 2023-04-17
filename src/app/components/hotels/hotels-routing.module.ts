import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  { path:"" , component:HotelsComponent},
  { path:"add" , component:AddHotelComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
