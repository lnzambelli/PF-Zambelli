import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-abm',
  templateUrl: './student-abm.component.html',
  styleUrls: ['./student-abm.component.scss']
})
export class StudentAbmComponent implements OnInit {

  @Input() contentTable!: Student[];
  @Input() headersTable!: string[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
