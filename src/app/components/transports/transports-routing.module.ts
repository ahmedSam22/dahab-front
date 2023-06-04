import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportsPageComponent } from './transports-page/transports-page.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

const routes: Routes = [
  {path : "" , component : TransportsPageComponent},
  // { path:"activities" , component:ActivitiesPageComponent},
  // { path:"activities/:id" , component:ActivityDetailsComponent},
  // { path:"rates/:id" , component:ReviewsComponent},
  { path:":id" , component:DriverDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportsRoutingModule { }
