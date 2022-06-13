import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CoursesAbmComponent } from './courses-abm/courses-abm.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MaterialModule } from './../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesContainerComponent,CoursesAbmComponent,CoursesFormComponent,CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [CoursesContainerComponent,CoursesAbmComponent,CoursesFormComponent,CoursesListComponent]
})
export class CoursesModule { }
