import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../core/models/course';
import listCourses from './../../assets/courses.json';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: Course[] = listCourses.courses

  constructor() { }

  getCourses(): Observable<Course[]>{
    return of(this.courseList)
  }
}
