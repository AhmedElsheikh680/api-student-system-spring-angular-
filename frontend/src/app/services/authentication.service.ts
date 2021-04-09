import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL, AUTHENTICATION, TOKEN} from '../app.constant';

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
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicAuth`, {headers: header}).pipe(
      map(
        response => {
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          sessionStorage.setItem(`${TOKEN}`, basicAuthHeaderString)
          return response;
        }
      )
    )
  }

  getAuthentication(){
    return sessionStorage.getItem(`${AUTHENTICATION}`);
  }
  getToken(){
    if(this.getAuthentication())
    return sessionStorage.getItem(`${TOKEN}`);
  }
  isLogin(){
    return !(sessionStorage.getItem(`${AUTHENTICATION}`) == null);
  }

  logout(){
    sessionStorage.removeItem(`${AUTHENTICATION}`);
    sessionStorage.removeItem(`${TOKEN}`)
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
