import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportsRoutingModule } from './transports-routing.module';
import { TransportsLayoutComponent } from './transports-layout/transports-layout.component';
import { TransportsPageComponent } from './transports-page/transports-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { DriverReviewsComponent } from './driver-reviews/driver-reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TransportsLayoutComponent,
    TransportsPageComponent,
    DriverDetailsComponent,
    DriverCardComponent,
    DriverReviewsComponent,
    AddReviewComponent,
  ],
  imports: [
    CommonModule,
    TransportsRoutingModule,
    SharedModule,
    CarouselModule,
    MatDialogModule,

  ]
})
export class TransportsModule { }
