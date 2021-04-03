import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder,
              private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password:  ['']
      })
    })
  }

  onSubmit() {
    // console.log(this.loginFormGroup.get('admin').value.userName);
    // console.log(this.loginFormGroup.get('admin').value.password);
    this.loginService.login(this.loginFormGroup.get('admin').value.userName,
                            this.loginFormGroup.get('admin').value.password);
  }
}
