import { Student } from 'src/app/models/student';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() contentTable!: Student[];
  @Input() headersTable!: string[]; 

  @Output() studentDelete = new EventEmitter<Student>();
  @Output() studentEdit = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteStudents(student: Student){
      this.studentDelete.emit(student)
  }

  editStudents(student: Student){
    this.studentEdit.emit(student)
  }

}
