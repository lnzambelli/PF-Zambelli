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
  studentToEdit!: Student;

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
    
  }

  onStudentEdit(e:Student){
    this.studentToEdit=e;
  }

  onStudentDelete(e:Student){
    this.arrStudents = this.arrStudents.filter(stud => stud.id !== e.id)
  }
}
