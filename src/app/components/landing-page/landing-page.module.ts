import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderCardsComponent } from './header-cards/header-cards.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { LandingTripsComponent } from './landing-trips/landing-trips.component';
import { LandingTripCardComponent } from './landing-trip-card/landing-trip-card.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ContactBarComponent,
    NavBarComponent,
    HeaderCardsComponent,
    HeaderTextComponent,
    LandingTripsComponent,
    LandingTripCardComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
