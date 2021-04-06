import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: string, password: string){
    if(userName == 'Ahmed Elsheikh' && password == 'AhmedElsheikh'){
      sessionStorage.setItem('isRegister', userName);
      return true;
    }
    return false;
  }

  isLogin(){
    return !(sessionStorage.getItem('isRegister') == null);
  }

  logout(){
    sessionStorage.removeItem('isRegister');
  }

}
