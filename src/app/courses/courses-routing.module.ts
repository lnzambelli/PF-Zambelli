import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
