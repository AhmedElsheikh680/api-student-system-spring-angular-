import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: string, password: string){
    if(userName == 'Ahmed' && password == 'Elsheikh'){
      sessionStorage.setItem('isRegister', userName);
      return true;
    }
    return false;
  }

  isLogin(){
    !(sessionStorage.getItem('isRegister') == null);
  }

  logout(){
    sessionStorage.removeItem('isRegister');
  }

}
