import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit{
  constructor(private service:AuthService,private formbuilder:FormBuilder,private router:Router){}


  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:["",Validators.required],
      // password:["",Validators.required],
    })
  }
  submitted = false;
  files: File[] = [];
  form!:FormGroup;

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) { 
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addHotel(){
    let x={
      ...this.form.value,
      profileImage:this.files
    }
    console.log(x.profileImage , "lokijhyuguhuoi");
    return this.service.addhotel(x).subscribe((e:any)=>{
      console.log(e , "done")
      
      if(e.status == 200){
        alert('done')
        // this.router.navigate(['/'])
      }
      
    })
    
    }

}
