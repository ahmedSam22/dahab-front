import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(public http:HttpClient) { }

  allOffices(page:number){
 
    return this.http.get(`${environment.baseURL}/offices/get?page=${page}`)
  }


officeDetails(id:any){
  return this.http.get(`${environment.baseURL}/offices/getOne?id=${id}`)

}


addReview(body:any){
  return this.http.post(`${environment.baseURL}/officesreviews/add` , body)
}

officeReviews(id:any,page = 1){
  return this.http.get(`${environment.baseURL}/officesreviews/getoffice?office=${id}&page=${page}`)
}



activityDetails(id:any){
  return this.http.get(`${environment.baseURL}/activities/getone?id=${id}`)

}


allActivities(page:any){
  return this.http.get(`${environment.baseURL}/activities/get?page=${page}`)

}



activityReviews(id:any,page:any){
  return this.http.get(`${environment.baseURL}/activitiesreviews/getactivity?activity=${id}&page=${page}`)
}

addActivityReview(body:any){
  return this.http.post(`${environment.baseURL}/activitiesreviews/add` , body)
}


}
