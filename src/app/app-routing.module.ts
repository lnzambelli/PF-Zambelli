import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesContainerComponent } from './courses/courses-container/courses-container.component';
import { PersonalCoursesComponent } from './components/personal-courses/personal-courses.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { StudentContainerComponent } from './students/student-container/student-container.component';
import { InscriptionsListComponent } from './inscriptions/inscriptions-list/inscriptions-list.component';

import { AdminGuard } from './core/guards/admin.guard';
import { UserGuard } from './core/guards/user.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionsAbmComponent } from './inscriptions/inscriptions-abm/inscriptions-abm.component';

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
  { path: 'listadoIncripciones', canActivate:[AdminGuard],component: InscriptionsListComponent,  pathMatch: 'full'},
  { path: 'abmIncripciones', canActivate:[AdminGuard],component: InscriptionsAbmComponent,  pathMatch: 'full'},       
  { path: '**', component: LoginComponent,  pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
