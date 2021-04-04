import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  message:string;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      data => this.students = data
    )
  }

deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(
      response => {
        this.getStudents(),
          this.message=`Deleted Successfully ID `+id
      }
    )
}




















}
