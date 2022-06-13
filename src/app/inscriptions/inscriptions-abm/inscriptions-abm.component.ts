import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-inscriptions-abm',
  templateUrl: './inscriptions-abm.component.html',
  styleUrls: ['./inscriptions-abm.component.scss']
})
export class InscriptionsAbmComponent implements OnInit {

  listCourses: Course[] = []

  constructor(private courseService: CourseService ) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data)=>{
     this.listCourses = data
    })
  }

}
