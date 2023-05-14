import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment"

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public http:HttpClient) { }



  signUp(query:userBody){
    return this.http.post(`${environment.baseURL}/register` , query)
  }

  login(query:userBody){
    return this.http.post(`${environment.baseURL}/login` , query)
  }
  forgetPassword(query:userBody){
    return this.http.post(`${environment.baseURL}/forgetpassword` , query)
  }
  secondLayer(query:userBody){
    return this.http.post(`${environment.baseURL}/secondlayer` , query)
  }

  newPassword(query:userBody){
    return this.http.post(`${environment.baseURL}/newpassword` , query)
  }



  allQuestions(){
    return this.http.get(`${environment.baseURL}/question/get`)

  }



  //hotels
  addhotel(query:any){
    const formData: FormData = new FormData();
    formData.append(`name`,query.name.toString())    

    // for (let i = 0; i < query.profileImage.length; i++) {
    //   formData.append(`files[${i}]`,query.profileImage[i])    
    // }
    formData.append(`profileImage`,query.profileImage[0])    
    
    // for (let i = 0; i < query.list.length; i++) {
    //   formData.append(`list[${i}]`,query.list[i])    
    // }
    return this.http.post(`${environment.baseURL}/hotels/add` , formData)
  }
}

export interface userBody {
  name: String;
  phone: Number;
  email: String;
  nationalID : Number;
  password : String;
  files : [],
  profileImage : []
  
}