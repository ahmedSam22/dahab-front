import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private toastr:ToastrService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error, "aaaaaaaaaaaaaaaaaaa");
        this.toastr.success('Hello world!', 'Toastr fun!');
        
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          this.toastr.success('Hello world!', 'Toastr fun!');

          errorMsg = `Error: ${error.error.message }`;


        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
        }
        console.log(errorMsg , "455555555555555");
        return throwError(errorMsg);
      })
    )
  }
}
