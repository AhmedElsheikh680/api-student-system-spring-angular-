import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  studentGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentGroup = this.formBuilder.group({
      student: this.formBuilder.group({
        fullName: ['fullName'],
        age: ['age'],
        address: ['address'],
        phone: ['phone'],
        gender: ['gender']
      })
    })
  }

  getFullName(){
    return this.studentGroup.get('student').value.fullName;
  }
  getAge(){
    return this.studentGroup.get('student').value.age;
  }
  getAddress(){
    return this.studentGroup.get('student').value.address;
  }
  getPhone(){
    return this.studentGroup.get('student').value.phone;
  }
  getGender(){
    return this.studentGroup.get('student').value.gender;
  }

  save() {
    console.log(`FullName: `+this.getFullName());
    console.log(`Age `+this.getAge());
    console.log(`Address `+this.getAddress());
    console.log(`Phone `+this.getPhone());
    console.log(`Gender `+this.getGender());
  }
}
