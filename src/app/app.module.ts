import { AuthGuard } from './guards/auth.guard';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "./shared/shared.module";
import { ErrorHandlingInterceptor } from './interceptor/error-handling.interceptor';
import { ToastrModule } from 'ngx-toastr';

// import { MapComponent } from './shared/map/map.component';

@NgModule({
  declarations: [
    AppComponent,

    
    // MapComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
    }),
    SharedModule,
    ToastrModule.forRoot()
],
  providers: [AuthGuard ,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
