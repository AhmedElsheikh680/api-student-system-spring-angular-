import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormGroup: FormGroup
  invalidMessage:string;
  constructor(private formBuilder: FormBuilder,
              private loginService:LoginService,
              private router: Router) { }

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
    const result = this.loginService.login(this.loginFormGroup.get('admin').value.userName,
                                            this.loginFormGroup.get('admin').value.password);
    if(result == true){
      this.router.navigateByUrl('students')
    }else{
      this.invalidMessage='Invalid Username And Password';
      this.showMessage();
    }

  }
  showMessage(){
    setTimeout(() => {
      this.invalidMessage=""
    }, 3000)
  }
}
