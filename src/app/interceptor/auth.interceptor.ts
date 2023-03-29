import { CurrentuserService } from './../guards/currentuser.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token:any

  constructor(private currentUserService: CurrentuserService,private route: ActivatedRoute) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.currentUserService.currentUserValue;
    var isLoggedIn = currentUser && currentUser?.access_token;
    const isApiUrl = request.url.startsWith(environment.endpoint);
    var token = currentUser?.token;
    if(this.token != null){
      request = request.clone({
        setHeaders: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${this.token}`,
            // lang:JSON.parse(localStorage.getItem())
            // lang:this.lang
        },
    });
    return next.handle(request);
      // token = this.token
      // isLoggedIn = true
    }
    if (isLoggedIn && isApiUrl ) {
      //
        try {
          request = request.clone({
            setHeaders: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
                // Authorization: `Bearer ${token}`
                // lang:this.lang
            },
        });
        } catch (error) {

        }
    }
    return next.handle(request);
}}
  
