import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { Registered } from 'src/app/core/models/registered';
import listCourses from './../../../assets/courses.json';

@Component({
  selector: 'app-personal-courses',
  templateUrl: './personal-courses.component.html',
  styleUrls: ['./personal-courses.component.scss']
})
export class PersonalCoursesComponent implements OnInit {

  arrCourses: Course[] = [];
  arrHeadersActions: string[] = [];
  arrInscriptions: Registered[] = [];
  userActive: any
  newRegistered!: Registered;

  constructor() { }
  

  ngOnInit(): void {
    this.getCourses();
    this.userActive = sessionStorage.getItem('user')
  }

  getCourses(){
    this.arrCourses = listCourses.courses;
    this.arrHeadersActions = listCourses.headersAbm
  }

  subscribeToCourse(course: Course){
    let obj = this.arrInscriptions.find((data) => data.nameCourse==course.name&&  data.nameStudent== this.userActive)
    if(!obj){
      this.arrInscriptions.push({nameCourse: course.name, nameStudent: this.userActive})
      console.log(this.arrInscriptions)
    }
    
  }

  unSubscribeToCourse(course: Course){
    this.arrInscriptions = this.arrInscriptions.filter((data) => (data.nameCourse!==course.name ||  data.nameStudent!== this.userActive))
    console.log(this.arrInscriptions)
  }

  isRegistered(){

  }


}
