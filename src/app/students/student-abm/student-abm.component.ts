import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/core/models/student';

@Component({
  selector: 'app-student-abm',
  templateUrl: './student-abm.component.html',
  styleUrls: ['./student-abm.component.scss']
})
export class StudentAbmComponent implements OnInit {

  @Input() contentTable!: Student[];
  @Input() headersTable!: string[];
  @Input() studentToEdit!: Student; 

  @Output() newStudentAdded = new EventEmitter<Student>();
  @Output() newStudentDelete = new EventEmitter<Student>();
  @Output() newStudentEdit = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  
  }

  onItemAdd(e:any){
    this.newStudentAdded.emit(e)
  }

  onStudentEdit(e:any){
    this.newStudentEdit.emit(e)
  }

  onStudentDelete(e:any){
    this.newStudentDelete.emit(e)
  }

}
