import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import listStudent from './../../../assets/students.json';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  arrStudents: Student[] = [];
  userActive: Student | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.arrStudents = listStudent.students 
    this.getStudents()
  }

  getStudents(){
      if(sessionStorage.getItem('user'))
      this.userActive = this.arrStudents.find(us => us.name.toLowerCase() == sessionStorage.getItem('user'))
  }

}
