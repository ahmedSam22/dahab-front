import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
  private currentUser$: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor() { 
    this.currentUser$ = new BehaviorSubject<any>(localStorage.getItem(`${environment.currentUserKey}`) || "{}");
    this.currentUser = this.currentUser$.asObservable();
  }


  public get currentUserValue(): any {
    if(this.currentUser$.value != null) { return this.currentUser$.value }
  }


setCurrentUser(){
  if(localStorage.getItem(`${environment.currentUserKey}`)){
    this.currentUser$.next({id : "1" , name :"hhh"});
  }else{
    this.currentUser$.next(null)
  }
}

}
