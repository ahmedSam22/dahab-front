import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityReviewsComponent } from './activity-reviews/activity-reviews.component';

const routes: Routes = [
  {path : "" , component : OfficesComponent},
  { path:"activities" , component:ActivitiesPageComponent},
  { path:"activities/:id" , component:ActivityDetailsComponent},
  { path:"activityreviews/:id" , component:ActivityReviewsComponent},
  { path:"rates/:id" , component:ReviewsComponent},
  { path:":id" , component:OfficeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
