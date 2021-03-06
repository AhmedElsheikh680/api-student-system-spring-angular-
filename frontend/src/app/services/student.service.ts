import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constant';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlStudents = `${API_URL}/api/v1/students`;

  constructor(private httpClient: HttpClient) { }

    getStudents(page, size): Observable<Student[]>{
    // let header = new HttpHeaders({
    //   Authorization: this.CreateBasicAuthenticationHttpHeader()
    // })
      return this.httpClient.get<Student[]>(this.urlStudents+`?page=${page}&size=${size}`).pipe(
        map(
          response => response
        )
      )
    }

  // getStudents(): Observable<Student[]>{
  //   return this.httpClient.get<GetResponseStudent>(this.urlStudents).pipe(
  //     map(
  //       response => response._embedded.students
  //     )
  //   )
  // }


  getStudentSize(): Observable<number>{
    // let header = new HttpHeaders({
    //   Authorization: this.CreateBasicAuthenticationHttpHeader()
    // })
    return this.httpClient.get<number>(this.urlStudents+`/length`).pipe(
      map(
        response =>response
      )
    )
  }
  deleteStudent(id: number){
    //this.httpClient.delete(this.urlStudents + `?id=`+id);
    return this.httpClient.delete(this.urlStudents+ `?id=${id}`);
  }

  addStudent(student: Student){
    return this.httpClient.post(this.urlStudents, student);
  }

  getStudentByid(id: number):Observable<Student>{
    return this.httpClient.get<Student>(`${API_URL}/api/v1/student?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  // updateStudent(student: Student, id: number){
  //   return this.httpClient.put(`http://localhost:8080/api/v1/students?id=${id}`, Student);
  //
  // }


  editStudent(student: Student,id: number){
    return this.httpClient.put(this.urlStudents + `?id=${id}` ,student);
  }

  getStudentByName(name: string, page:number, size:number):Observable<Student[]>{
    return this.httpClient.
      get<Student[]>(this.urlStudents+`/searchName?fullName=${name}&page=${page}&size=${size}`).pipe(
      map(
        response =>response
      )
    )
  }

  getStudentSizeByName(name:string):Observable<number>{
    return this.httpClient.get<number>(this.urlStudents+`/lengthName?name=${name}`).pipe(
      map(
        response => response
      )
    )
  }
  // CreateBasicAuthenticationHttpHeader(){
  //   let username= `AhmedElsheikh`;
  //   let password = `AhmedElsheikh`;
  //   let basicAuthHeaderString = `Basic `+window.btoa(username + `:` + password); // Base64
  //   return basicAuthHeaderString;
  // }

}

// interface GetResponseStudent {
//   _embedded: {
//     students: Student[]
//   }
// }


