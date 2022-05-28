import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';

import { StudentContainerComponent } from './components/student-container/student-container.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full'},
  { path: 'misdatos', component: DashboardComponent,  pathMatch: 'full'}, 
  { path: 'miscursos', component: DashboardComponent,  pathMatch: 'full'}, 
  { path: 'listadoalumnos', component: StudentContainerComponent,  pathMatch: 'full'}, 
  { path: 'listadocursos', component: CoursesContainerComponent,  pathMatch: 'full'}, 
  { path: 'abmalumnos', component: StudentContainerComponent,  pathMatch: 'full'}, 
  { path: 'abmcursos', component: CoursesContainerComponent,  pathMatch: 'full'},   
  { path: '**', component: LoginComponent,  pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
