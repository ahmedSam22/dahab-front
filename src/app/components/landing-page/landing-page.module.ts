import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderCardsComponent } from './header-cards/header-cards.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ContactBarComponent,
    NavBarComponent,
    HeaderCardsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
