import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  estaCreando: boolean = false;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;
  }

  createForm = this.fb.group({
    nombre:[null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    permiso: [null, [Validators.required]],
  });



  onSubmit(): void {
    this.estaCreando = true;
    //this.createForm.value
   
  }
}
