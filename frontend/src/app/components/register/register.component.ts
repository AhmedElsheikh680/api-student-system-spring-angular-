import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';
import {AuthenticationService} from '../../services/authentication.service';

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
              private router: Router,
              private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: new FormControl('', [Validators.required,
                      Validators.minLength(5), SpaceValidator.noOnlyWithSpace]),
        password: new FormControl('', [Validators.required,
          Validators.minLength(5), SpaceValidator.noOnlyWithSpace])
      })
    })
  }

  get userName(){
    return this.loginFormGroup.get('admin.userName');
  }
  get password(){
    return this.loginFormGroup.get('admin.password');
  }

  onSubmit() {
    if(this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched();
    }else{
      // console.log(this.loginFormGroup.get('admin').value.userName);
      // console.log(this.loginFormGroup.get('admin').value.password);

      // const result = this.loginService.login(this.loginFormGroup.get('admin').value.userName,
      //   this.loginFormGroup.get('admin').value.password);
      // if(result == true){
      //   this.router.navigateByUrl('students')
      // }else{
      //   this.invalidMessage='Invalid Username And Password';
      //   this.showMessage();
      // }

      this.authentication.executeAuthentication(this.loginFormGroup.get('admin').value.userName,
        this.loginFormGroup.get('admin').value.password).subscribe(
                                                    data =>{
                                                      console.log(data);
                                                      this.router.navigateByUrl('students');
                                                    },error => {
                                                        this.invalidMessage='Invalid Username And Password';
                                                        this.showMessage()
        }
      )
    }


  }
  showMessage(){
    setTimeout(() => {
      this.invalidMessage=""
    }, 3000)
  }
}
