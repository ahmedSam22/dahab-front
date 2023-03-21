import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent {
   phone:Number = 0;
  constructor(private service:AuthService,private formbuilder:FormBuilder,private router:Router,private route: ActivatedRoute,
    ){
    this.route.queryParams.subscribe((params) => {
       this.phone  = params['phone'];
    });
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      phone:[this.phone,Validators.required],
      password:["",Validators.required],
      confirmPassword:["",Validators.required],
    })
  }

  submitted = false;
  form!:FormGroup;
  newPassword(){
    console.log(this.form.value);
    return this.service.newPassword(this.form.value).pipe(map(res=>res)).subscribe(async (res:any)=>{
      // console.log(res.status , "done")
      console.log(res.status , "done")
      // console.log(res.status);
      
      if(res.status === 200){
        await this.router.navigate(['/auth/login'])
      }
      
    })
    
    }
}
