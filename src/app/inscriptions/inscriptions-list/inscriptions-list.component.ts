import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/course';
import { Student } from 'src/app/core/models/student';
import { CourseService } from 'src/app/services/course.service';
import { StudentsService } from 'src/app/services/students.service';
import { StudentAbmComponent } from 'src/app/students/student-abm/student-abm.component';

@Component({
  selector: 'app-inscriptions-list',
  templateUrl: './inscriptions-list.component.html',
  styleUrls: ['./inscriptions-list.component.scss']
})
export class InscriptionsListComponent implements OnInit {

  headersTable: string[] = ["id", "name","surname", "email", "adminPermission","actions"];

  dataSource: Student[] = [];
  listCourses: Course[] = []

  studentOK: any

  isDetails: boolean = false;

  selected = '';

  name: any

  constructor(private studentsService: StudentsService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(data =>{
      this.dataSource=data;
    })
    this.courseService.getCourses().subscribe((data)=>{
      this.listCourses = data
     })
  }

  viewInscription(student: Student[]){
   this.isDetails= true;
    for (let aux in student) {
        if (aux=='inscriptions'){
            this.studentOK = student[aux]
        } 
        if (aux=='name'){
          this.name = student[aux]
      }   
    }
  }

  addCourse(){
    this.dataSource.map((data)=>{
        if(data.name== this.name){
          if(!data.inscriptions.find(val => val==this.selected) )
            data.inscriptions.push(this.selected)
        }
    })
  }
  removeCourse(){
    this.dataSource.map((data)=>{
      if(data.name== this.name){
        data.inscriptions=data.inscriptions.filter(val => val != this.selected)
        this.isDetails= false;
      } 
    })
  }

}
