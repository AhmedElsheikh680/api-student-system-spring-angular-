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





















}
