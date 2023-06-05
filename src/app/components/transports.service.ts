import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransportsService {

 
  constructor(public http:HttpClient) { }

  allDrivers(page:number){
 
    return this.http.get(`${environment.baseURL}/transports/get?page=${page}`)
  }


driverDetails(id:any){
  return this.http.get(`${environment.baseURL}/transports/getone?id=${id}`)

}


addReview(body:any){
  return this.http.post(`${environment.baseURL}/insidetransportsreviews/add` , body)
}

driverReviews(id:any,page = 1){
  return this.http.get(`${environment.baseURL}/insidetransportsreviews/getone?id=${id}&page=${page}`)
}


}
