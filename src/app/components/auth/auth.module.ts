import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthRoutingModule } from './auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NewpasswordComponent } from './newpassword/newpassword.component';

@NgModule({
  declarations: [
    LoginComponent,SignupComponent,ForgetPasswordComponent, NewpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    // FormGroup,
    // FormControl
    
    
    

  ]
})
export class AuthModule { }
