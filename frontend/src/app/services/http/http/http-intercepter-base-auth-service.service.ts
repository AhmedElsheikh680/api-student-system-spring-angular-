import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthServiceService implements HttpInterceptor{

  constructor(private authentication:AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //HardCoded
    // let username = `Ahmed`;
    // let password = `Elsheikh`;
    // let basicAuthHeaderString = `Basic `+ window.btoa(username + `:` + password);

    if(this.authentication.getAuthentication() && this.authentication.getToken()){
      request = request.clone({
        setHeaders: {
          Authorization: this.authentication.getToken()
        }
      })
    }

    return next.handle(request);
  }
}
