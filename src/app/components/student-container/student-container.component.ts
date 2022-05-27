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

  onStudentAdd(e:any){
    console.log(e)
    let index=1;
    if(this.arrStudents.length>0){
      index=this.arrStudents.length+1;
      e.id=index;
      this.arrStudents.push(e);
    }else{
      e.id=index;
      this.arrStudents.push(e)
    }
    console.log(this.arrStudents)
  }

  onStudentEdit(e:any){
    console.log(e)
  }

  onStudentDelete(e:any){
    this.arrStudents = this.arrStudents.filter(stud => stud.id !== e.id)
  }
}
