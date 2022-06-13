import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { StudentAbmComponent } from './student-abm/student-abm.component';
import { MaterialModule } from './../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentListComponent,StudentAbmComponent, StudentContainerComponent,StudentFormComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:  [StudentListComponent,StudentAbmComponent, StudentContainerComponent,StudentFormComponent],
})
export class StudentsModule { }
