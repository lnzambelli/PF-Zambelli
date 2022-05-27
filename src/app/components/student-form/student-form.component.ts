import { Student } from 'src/app/models/student';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  @Output() studentAdded = new EventEmitter<Student>(); 

  estaCreando: boolean = false;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;
  }

  createForm = this.fb.group({
    name:[null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    adminPermission: [null, [Validators.required]],
  });

  onSubmit(): void {
    this.estaCreando = true;
    this.studentAdded.emit(this.createForm.value)
  }
}
