import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavigatorComponent } from 'src/app/shared/navigator/navigator.component';
import { CardComponent } from 'src/app/shared/card/card.component';


@NgModule({
  declarations: [HomeComponent, CardComponent , NavigatorComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
