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

  save() {

  }
}
