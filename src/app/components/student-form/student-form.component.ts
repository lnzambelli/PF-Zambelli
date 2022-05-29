import { Student } from 'src/app/models/student';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnChanges {

  @Output() studentAdded = new EventEmitter<Student>(); 
  @Input() studentToEdit!: Student; 

  estaCreando: boolean = false;
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;

    this.createForm = this.fb.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adminPermission: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.studentToEdit.firstChange){
      this.createForm.get('name')?.patchValue(this.studentToEdit.name);
      this.createForm.get('surname')?.patchValue(this.studentToEdit.name);
      this.createForm.get('email')?.patchValue(this.studentToEdit.email);
      this.createForm.get('adminPermission')?.patchValue(this.studentToEdit.adminPermission);
    }
 
  }
  

  onSubmit(): void {
    this.estaCreando = true;
    if(!this.studentToEdit){
      this.studentAdded.emit(this.createForm.value)
    }else{
      this.createForm.value['id']=this.studentToEdit.id
      let vendedorEdited=this.createForm.value;
      this.studentAdded.emit(vendedorEdited)
    }
    setTimeout(() => {
      this.createForm.reset()
      this.estaCreando = false;
    }, 1000);
  }
}
