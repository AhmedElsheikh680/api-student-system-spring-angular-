import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[]=[];
  message:string;
  page: number =1;
  size: number=5;
  numElements: number;
  fullName:string="";
  constructor(private studentService: StudentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const resultName = this.route.snapshot.paramMap.has("name");
      if(resultName == true){
       this.fullName = this.route.snapshot.paramMap.get("name");
        this.getStudentByName();
      }else{
        this.getStudents()

      }
    })

  }
  getStudentByName(){
    this.studentService.getStudentByName(this.fullName,this.page -1, this.size).subscribe(
      data => {
        this.students = data,
          this.getStudentElementsByName()
      }
    )
  }
  getStudents(){
    this.studentService.getStudents(this.page - 1, this.size).subscribe(
      data =>{
        this.students = data,
        this.getStudentElements()
      }

    );

  }
  getStudentElements(){
    return this.studentService.getStudentSize().subscribe(
      data  => this.numElements = data
    );
  }
  getStudentElementsByName(){
    return this.studentService.getStudentSizeByName(this.fullName).subscribe(
      data => this.numElements = data
    )
  }
  deleteStudent(id: number){
    const index = this.students.findIndex(student => student.id == id);
    this.studentService.deleteStudent(id).subscribe(
      response => {
        // this.getStudents(),
        this.students.splice(index, 1),
          this.message=`Deleted Successfully ID `+id,
          this.showMessage()
      }
    )
  }

  showMessage(){
    setTimeout(() => {
      this.message=''
    }, 3000)
  }


  change() {
    const resultName = this.route.snapshot.paramMap.has("name");
    if(resultName == true){

      this.getStudentByName();
    }else{
      this.getStudents()

    }
  }
}
