import { Component, OnInit } from '@angular/core';
import { AuthService, userBody } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  constructor(private service:AuthService,private formbuilder:FormBuilder,private router:Router){
    this.getAllQuestions()
  }
  
  submitted = false;
  secondPhase:Boolean = false;
  allQuestions:any=[]
  form!:FormGroup;

ngOnInit(){
  
  
  this.form = this.formbuilder.group({
    name:["",Validators.required],
    email:["",Validators.required],
    phone:["",Validators.required],
    password:["",Validators.required],
    securityquestion:["Select Your Security Question",Validators.required],
    securityanswer:["",Validators.required],
  })
}


getAllQuestions(){
  this.service.allQuestions().pipe(map((res:any)=>res["data"])).subscribe(e=>this.allQuestions = e)
}
signUp(){
console.log(this.form.value);
return this.service.signUp(this.form.value).pipe(map(res=>res)).subscribe(async (res:any)=>{
  // console.log(res.status , "done")
  console.log(res.status , "done")
  // console.log(res.status);
  
   if(res.status === 200){
    await this.router.navigate(['/auth/login'])
  }
  
})

}

}
