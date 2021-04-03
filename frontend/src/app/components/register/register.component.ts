import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password:  ['']
      })
    })
  }

}
