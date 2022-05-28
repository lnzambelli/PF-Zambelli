import { Component, OnInit } from '@angular/core';
import listCourses from './../../../assets/courses.json';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss']
})
export class CoursesContainerComponent implements OnInit {

  arrCourses: Course[] = [];
  arrHeaders: string[] = [];
  arrHeadersActions: string[] = [];
  courseToEdit!: Course;

  activeRoute: string = ""

  constructor(private router: Router){}

  ngOnInit(): void {
      this.getCourses();
      this.activeRoute = this.router.url;
  }

  getCourses(){
    this.arrCourses = listCourses.courses;
    this.arrHeaders = listCourses.headers;
    this.arrHeadersActions = listCourses.headersAbm
  }

  onCourseAdd(e:any){
    console.log(e)
    let index=1;
    if(this.arrCourses.length>0){
      if(!e.id){
        index=this.arrCourses.length+1;
        e.id=index;
        this.arrCourses.push(e);
      }else{
        let index=this.arrCourses.findIndex((x:Course)=>x.id===e.id);
        this.arrCourses[index]=e;
      }
      this.arrCourses = this.arrCourses.filter(stud => stud.id !== e.index) 
    }else{
      e.id=index;
      this.arrCourses.push(e)
      this.arrCourses = this.arrCourses.filter(stud => stud.id !== e.index)
    }
    
  }

  onCourseEdit(e:Course){
    this.courseToEdit=e;
  }

  onCourseDelete(e:Course){
    this.arrCourses = this.arrCourses.filter(stud => stud.id !== e.id)
  }

}
