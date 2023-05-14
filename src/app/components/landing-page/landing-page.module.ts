import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { HeaderCardsComponent } from './header-cards/header-cards.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { LandingHotelsComponent } from './landing-hotels/landing-hotels.component';
import { LandingHotelCardComponent } from './landing-hotels-card/landing-hotel-card.component';
import { TripSecComponent } from './trip-sec/trip-sec.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    ContactBarComponent,
    HeaderCardsComponent,
    HeaderTextComponent,
    LandingHotelsComponent,
    LandingHotelCardComponent,
    TripSecComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
