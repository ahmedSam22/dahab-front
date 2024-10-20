import { ActivitiesModule } from './components/activities/activities.module';
import { HotelsModule } from './components/hotels/hotels.module';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './components/hotels/hotels/hotels.component';
import { HotelsLayoutComponent } from './components/hotels/hotels-layout/hotels-layout.component';
import { ActivitiesLayoutComponent } from './components/activities/activities-layout/activities-layout.component';
import { TransportsLayoutComponent } from './components/transports/transports-layout/transports-layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},

 
  // { path: 'home', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },

  
  { path: '', loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule) },


  // { path: 'hotels', loadChildren: () => import('./components/hotels/hotels.module').then(m => m.HotelsModule) },

  { path: 'offices', loadChildren: () => import('./components/activities/activities.module').then(m => m.ActivitiesModule) },

  { path: 'transports', loadChildren: () => import('./components/transports/transports.module').then(m => m.TransportsModule) },

  {path : 'hotels' ,canActivate:[AuthGuard], loadChildren: () => import('./components/hotels/hotels.module').then(m => m.HotelsModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
