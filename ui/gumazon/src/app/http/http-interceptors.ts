/** Http interceptor providers in outside-in order */
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthHttpInterceptorService} from "./auth-http-interceptor.service";


export const httpInterceptorProviders = [

  { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true },
];
