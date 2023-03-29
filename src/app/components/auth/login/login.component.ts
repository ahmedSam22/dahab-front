import { environment } from './../../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private service:AuthService,private formbuilder:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      phone:["",Validators.required],
      password:["",Validators.required],
    })
  }
  submitted = false;
  form!:FormGroup;
  login(){
    console.log(this.form.value);
    return this.service.login(this.form.value).subscribe((e:any)=>{
      console.log(e , "done")
      if(e.token){
        localStorage.setItem(`${environment.currentUserKey}` , e.token)
      }
      if(e.status == 200){
        
        this.router.navigate(['/'])
      }
      
    })
    
    }

}
