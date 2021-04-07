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
  constructor(private studentService: StudentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const resultName = this.route.snapshot.paramMap.has("name");
      if(resultName == true){
        const name = this.route.snapshot.paramMap.get("name");
        this.getStudentByName(name);
      }else{
        this.getStudents()

      }
    })

  }
  getStudentByName(name:string){
    this.studentService.getStudentByName(name).subscribe(
      data =>this.students = data
    )
  }
  getStudents(){
    this.studentService.getStudents(this.page, this.size).subscribe(
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
