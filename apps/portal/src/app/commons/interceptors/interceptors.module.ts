import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigHttpInterceptor } from './config-http.interceptor';



@NgModule({
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : ConfigHttpInterceptor,
      multi : true}
  ]
})
export class AppInterceptorsModule { }
