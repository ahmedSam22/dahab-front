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
// import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  // constructor(private toastr:ToastrService) {

  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `${error.error.message }`;
        } else {
          errorMsg = `${error.error.message}`;
        }
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: errorMsg,
          showConfirmButton: false,
          timer: 1500,
          heightAuto : false,
          width : '400px',
          
        });
        return throwError(errorMsg);
      })
    )
  }
}
