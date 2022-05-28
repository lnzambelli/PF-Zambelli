import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-abm',
  templateUrl: './courses-abm.component.html',
  styleUrls: ['./courses-abm.component.scss']
})
export class CoursesAbmComponent implements OnInit {

  @Input() contentTable!: Course[];
  @Input() headersTable!: string[];
  @Input() courseToEdit!: Course; 

  @Output() newCourseAdded = new EventEmitter<Course>();
  @Output() newCourseDelete = new EventEmitter<Course>();
  @Output() newCourseEdit = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  
  }

  onItemAdd(e:any){
    this.newCourseAdded.emit(e)
  }

  onCourseEdit(e:any){
    this.newCourseEdit.emit(e)
  }

  onCourseDelete(e:any){
    this.newCourseDelete.emit(e)
  }

}
