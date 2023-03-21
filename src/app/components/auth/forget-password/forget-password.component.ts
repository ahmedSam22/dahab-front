import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private service:AuthService,private formbuilder:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      phone:["",Validators.required],
    })

    this.layer2 = this.formbuilder.group({
      phone:["",Validators.required],
      answer:["",Validators.required]
    })
  }
  submitted = false;
  showAnswer:boolean = false
  form!:FormGroup;
  layer2!:FormGroup;
  forgetPassword(){
    console.log(this.form.value);
    return this.service.forgetPassword(this.form.value).pipe(map(res=>res)).subscribe(async (res:any)=>{
      // console.log(res.status , "done")
      console.log(res )
      // console.log(res.status);
      
       if(res.status === 200){
        this.showAnswer = true
        // this.router.navigate(['/auth/new-password'], {queryParams:{phone : this.form.value.phone}} );
      }
      
    })
    
    }


    secondLayer(){
      this.layer2.value.phone = this.form.value.phone
      console.log(this.layer2.value.phone);
      return this.service.secondLayer(this.layer2.value).pipe(map(res=>res)).subscribe(async (res:any)=>{
        // console.log(res.status , "done")
        console.log(res )
        // console.log(res.status);
        
         if(res.status === 200){
          // this.showAnswer = true
          this.router.navigate(['/auth/new-password'], {queryParams:{phone : this.form.value.phone}} );
        }
        
      })
    }
}
