import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
allFavs:any;
  constructor(public http:HttpClient) { 
    
  }

  allHotels(page:number , f?:any){
    var params = ''
    if(f){
      const {type , startPrice , endPrice } = f
    if(type) params += `&type=${type}`
    if(startPrice) params += `&startPrice=${startPrice}`
    if(endPrice) params += `&endPrice=${endPrice}`

    }
    
    return this.http.get(`${environment.baseURL}/hotels/get?page=${page}${params}`)
  }

  // filteredHotels(page:number , f:any){
  //   const {type , startPrice , endPrice } = f
  //   var params = ''
  //   if(type) params += `&type=${type}`
  //   if(startPrice) params += `&startPrice=${startPrice}`
  //   if(endPrice) params += `&endPrice=${endPrice}`

  //   return this.http.get(`${environment.baseURL}/hotels/filtered?page=${page}${params}`)
  // }

hotelDetails(id:any){
  return this.http.get(`${environment.baseURL}/hotels/getOne?id=${id}`)

}


hotelFavourite(id:any){
  return this.http.get(`${environment.baseURL}/hotels/favourite?id=${id}`)

}

addReview(body:any){
  return this.http.post(`${environment.baseURL}/reviews/add` , body)
}


hotelReviews(id:any){
  return this.http.get(`${environment.baseURL}/reviews/gethotel?hotel=${id}`)
}
}
