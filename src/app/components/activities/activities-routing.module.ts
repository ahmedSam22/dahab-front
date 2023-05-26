import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';

const routes: Routes = [
  {path : "" , component : OfficesComponent},
  { path:":id" , component:OfficeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
