import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../core/models/student';
import listStudent from './../../assets/students.json';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentList: Student[] = listStudent.students

  constructor() { }

  getStudents(): Observable<Student[]>{
    return of(this.studentList)
  }
}
