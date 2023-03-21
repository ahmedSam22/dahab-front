import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"login" , component:LoginComponent},
  { path:"signup" , component:SignupComponent},
  { path:"forget-password" , component:ForgetPasswordComponent},
  { path:"new-password" , component:NewpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
