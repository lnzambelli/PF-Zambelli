import { Student } from 'src/app/models/student';
import { Component, OnDestroy, OnInit } from '@angular/core';
import listStudent from './../../../assets/students.json';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.scss']
})

export class StudentContainerComponent implements OnInit, OnDestroy{

  arrStudents: Student[] = [];
  arrHeaders: string[] = [];
  arrHeadersActions: string[] = [];
  studentToEdit!: Student;
  subscriptions!:Subscription;

  activeRoute: string = ""

  constructor(private router: Router, private studentServices: StudentsService){}

  ngOnInit(): void {
      this.getStudents();
      this.activeRoute = this.router.url;
  }

  getStudents(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.studentServices.getStudents().subscribe(list => this.arrStudents = list))
  
    this.arrHeaders = listStudent.headers;
    this.arrHeadersActions = listStudent.headersAbm
  }

  onStudentAdd(e:any){
    this.subscriptions.add(this.studentServices.getStudents().subscribe(list => this.arrStudents = list))

    let index=1;
    if(this.arrStudents.length>0){
      if(!e.id){
        index=this.arrStudents.length+1;
        e.id=index;
        this.arrStudents.push(e);
      }else{
        let index=this.arrStudents.findIndex((x:Student)=>x.id===e.id);
        this.arrStudents[index]=e;
      }
      this.arrStudents = this.arrStudents.filter(stud => stud.id !== e.index) 
    }else{
      e.id=index;
      this.arrStudents.push(e)
      this.arrStudents = this.arrStudents.filter(stud => stud.id !== e.index)
    }
    this.studentServices.studentList = this.arrStudents
  }

  onStudentEdit(e:Student){
    this.studentToEdit=e;
  }

  onStudentDelete(e:Student){
    this.subscriptions.add(this.studentServices.getStudents().subscribe(list => this.arrStudents = list))
    this.arrStudents = this.arrStudents.filter(stud => stud.id !== e.id)
    this.studentServices.studentList = this.arrStudents;
  }

  ngOnDestroy(){
      this.subscriptions.unsubscribe()
  }
}
