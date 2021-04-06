import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,private route: Router) { }

  ngOnInit(): void {
  }
  isAuthenticatedUser(){
    return this.loginService.isLogin();
  }

  logout() {
    this.loginService.logout();
    this.route.navigateByUrl('register');
  }

  search(name: string) {
    this.route.navigateByUrl(`students/${name}`);

  }
}
