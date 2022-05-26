import { Student } from 'src/app/models/student';
import { Component, OnInit } from '@angular/core';
import listStudent from './../../data/students.json'

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.scss']
})

export class StudentContainerComponent implements OnInit{

  arrStudents: Student[] = [];
  arrHeaders: string[] = [];
  arrHeadersActions: string[] = [];

  constructor(){}

  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(){
    this.arrStudents = listStudent.students;
    this.arrHeaders = listStudent.headers;
    this.arrHeadersActions = listStudent.headersAbm
  }
}
