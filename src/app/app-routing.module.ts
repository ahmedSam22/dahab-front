import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},

  {path : 'home' ,component :HomeComponent, children:[
    { path: '', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },

  ]},

  // {path : 'home' ,component :HomeComponent,canActivate:[AuthGuard], children:[
  //   { path: '', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },

  // ]},

  {path : '' ,component :LandingPageComponent, children:[
    { path: '', loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule) },

  ]},

  // {path : '' ,component :LandingPageComponent,canActivate:[AuthGuard], children:[
  //   { path: '', loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule) },
    
  // ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
