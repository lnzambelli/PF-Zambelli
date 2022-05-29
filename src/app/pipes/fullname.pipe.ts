import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';
import listStudent from './../../assets/students.json';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  arrStudents: Student[] = [];
  fullName = "";

  constructor(){
    this.arrStudents = listStudent.students
  }

  transform(value: unknown): string {

    this.arrStudents.forEach((stud) => {
      if (stud.name==value){
          this.fullName=`${stud.name} ${stud.surname}`;
      }
    })

    return this.fullName;
  }

}
