import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import listCourses from './../../../assets/courses.json';

@Component({
  selector: 'app-personal-courses',
  templateUrl: './personal-courses.component.html',
  styleUrls: ['./personal-courses.component.scss']
})
export class PersonalCoursesComponent implements OnInit {

  arrCourses: Course[] = [];
  arrHeadersActions: string[] = [];

  constructor() { }
  

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    this.arrCourses = listCourses.courses;
    this.arrHeadersActions = listCourses.headersAbm
  }

}
