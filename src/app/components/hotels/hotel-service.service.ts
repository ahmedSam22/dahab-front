import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(public http:HttpClient) { 
    
  }

  allHotels(){
    return this.http.get(`${environment.baseURL}/hotels/get`)
  }


}
