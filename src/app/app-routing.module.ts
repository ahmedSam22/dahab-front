import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthModule } from './components/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
  {path : '' ,component :HomeComponent,canActivate:[AuthGuard], children:[
    { path: '', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
