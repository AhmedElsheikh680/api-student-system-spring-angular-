import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  studentGroup: FormGroup;
  id:number;
  student:Student = new Student(0, "","","","","");
  constructor(private formBuilder: FormBuilder, private studentService: StudentService,
                private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  +this.route.snapshot.paramMap.get('id');
    if(this.id !=0){
      this.studentService.getStudentByid(this.id).subscribe(
        response => this.student = response
      )
    }
    this.studentGroup = this.formBuilder.group({
      student: this.formBuilder.group({
        fullName: [''],
        age: [''],
        address: [''],
        phone: [''],
        gender: ['']
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
    // console.log(`FullName: `+this.getFullName());
    // console.log(`Age `+this.getAge());
    // console.log(`Address `+this.getAddress());
    // console.log(`Phone `+this.getPhone());
    // console.log(`Gender `+this.getGender());
    const student = new Student(-1, this.getFullName(), this.getGender(), this.getAge(),this.getPhone(),this.getGender());
    this.studentService.addStudent(student).subscribe(
      response =>{
        // alert(`Added Successfully`)
        this.router.navigateByUrl('/students')

      }
    )
  }
}
