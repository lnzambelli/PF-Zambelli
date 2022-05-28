import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {

  @Output() courseAdded = new EventEmitter<Course>(); 
  @Input() courseToEdit!: Course; 

  estaCreando: boolean = false;
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;

    this.createForm = this.fb.group({
      name:['', Validators.required],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    if(this.courseToEdit){
      this.createForm.get('name')?.patchValue(this.courseToEdit.name);
      this.createForm.get('date')?.patchValue(this.courseToEdit.date);
      this.createForm.get('category')?.patchValue(this.courseToEdit.category);
    }
    
  }
  

  onSubmit(): void {
    this.estaCreando = true;
    if(!this.courseToEdit){
      this.courseAdded.emit(this.createForm.value)
    }else{
      this.createForm.value['id']=this.courseToEdit.id
      let courseEdited=this.createForm.value;
      this.courseAdded.emit(courseEdited)
    }
    setTimeout(() => {
      this.createForm.reset()
      this.estaCreando = false;
    }, 1000);
  }

}
