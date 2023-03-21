import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StaticDataService {

  constructor() { }
  Cards : Card[] = [
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Hotels&Camps"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Shops"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Restaurants"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Trip Offices"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Transports"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Programs"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Suggests"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Rates"
      },
      {
        "color" : "hhhh", 
        "image" : "hehehe",
        "title" : "Discounts"
      },
  ]


}


export interface Card {
  color: string;
  image: string;
  title: string;
  
}