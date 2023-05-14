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
  
  constructor(private currentUserService: CurrentuserService,private route: ActivatedRoute) {}
  
  private token:any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.currentUserService.currentUserValue;
    const isLoggedIn = currentUser && currentUser;
    const isApiUrl = request.url.startsWith(environment.endpoint);
   console.log("<---------interceptor----->")
    if (isLoggedIn && isApiUrl) {
        console.log(currentUser)
        request = request.clone({
            setHeaders: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${currentUser}`,
            },
            // setParams :{
            //     "language_symbol":localStorage.getItem('currentLang') || 'en',
            // }
        });
    }else if ( isApiUrl) {
        console.log(currentUser)
        request = request.clone({
            setHeaders: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

                Authorization: `Bearer ${currentUser.data.access_token}`
            },
            // setParams :{
            //     "language_symbol":"ar"
            // }
        });
    }
    console.log("req: " , request);
    return next.handle(request);
}


}
  
