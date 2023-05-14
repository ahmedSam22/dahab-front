import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDataComponent } from './hotel-data/hotel-data.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path:"" , component:HotelsComponent},
  { path:"add" , component:AddHotelComponent},
  { path:"reviews/:id" , component:ReviewsComponent},
  { path:":id" , component:HotelDataComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
