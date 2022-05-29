import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { PersonalCoursesComponent } from './components/personal-courses/personal-courses.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { StudentContainerComponent } from './components/student-container/student-container.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '',  component: LoginComponent,  pathMatch: 'full'},
  { path: 'login',component: LoginComponent,  pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full'},
  { path: 'misdatos', canActivate:[UserGuard], component: PersonalInformationComponent,  pathMatch: 'full'}, 
  { path: 'miscursos', canActivate:[UserGuard], component: PersonalCoursesComponent,  pathMatch: 'full'}, 
  { path: 'listadoalumnos',canActivate:[AdminGuard], component: StudentContainerComponent,  pathMatch: 'full'}, 
  { path: 'listadocursos',canActivate:[AdminGuard], component: CoursesContainerComponent,  pathMatch: 'full'}, 
  { path: 'abmalumnos', canActivate:[AdminGuard],component: StudentContainerComponent,  pathMatch: 'full'}, 
  { path: 'abmcursos', canActivate:[AdminGuard],component: CoursesContainerComponent,  pathMatch: 'full'},   
  { path: '**', component: LoginComponent,  pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
