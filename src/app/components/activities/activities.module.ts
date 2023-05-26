import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { OfficeCardComponent } from './office-card/office-card.component';
import { OfficesComponent } from './offices/offices.component';
import { ActivitiesLayoutComponent } from './activities-layout/activities-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
OfficeCardComponent,
OfficesComponent,
ActivitiesLayoutComponent ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    CarouselModule,
    MatDialogModule
  ]
})
export class ActivitiesModule { }
