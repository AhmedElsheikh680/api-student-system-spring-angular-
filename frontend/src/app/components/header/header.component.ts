import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authentication: AuthenticationService,private route: Router) { }

  ngOnInit(): void {
  }
  isAuthenticatedUser(){
    return this.authentication.isLogin();
  }

  logout() {
    this.authentication.logout();
    this.route.navigateByUrl('register');
  }

  search(name: string) {
    this.route.navigateByUrl(`students/${name}`);

  }
}
