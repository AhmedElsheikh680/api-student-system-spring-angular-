import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeAuthentication(username, password) {
    let basicAuthHeaderString = `Basic `+ window.btoa(username + `:` + password);
    let header = new HttpHeaders( {
      Authorization: basicAuthHeaderString
    })
    return this.httpClient.get<AuthenticationBean>("http://localhost:8080/basicAuth", {headers: header}).pipe(
      map(
        response => {
          sessionStorage.setItem("isRegister",username);
          return response;
        }
      )
    )
  }
}

export class AuthenticationBean {
  constructor(private _message: string) {}

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
