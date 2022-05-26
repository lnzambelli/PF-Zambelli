import { Student } from 'src/app/models/student';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() contentTable!: Student[];
  @Input() headersTable!: string[]; 

  constructor() { }

  ngOnInit(): void {
     
  }

}
