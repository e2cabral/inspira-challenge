import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingHttpInterceptor } from './interceptors/loading.http.interceptor';
import {HTTP_INTERCEPTORS} from "@angular/common/http";



@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true },
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
