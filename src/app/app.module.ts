import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentContainerComponent } from './components/student-container/student-container.component';
import { StudentAbmComponent } from './components/student-abm/student-abm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { CoursesAbmComponent } from './components/courses-abm/courses-abm.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { PersonalCoursesComponent } from './components/personal-courses/personal-courses.component';
import { TitleStyleDirective } from './directives/title-style.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentContainerComponent,
    StudentAbmComponent,
    FooterComponent,
    DashboardComponent,
    LoginFormComponent,
    LoginComponent,
    CoursesContainerComponent,
    CoursesAbmComponent,
    CoursesFormComponent,
    CoursesListComponent,
    PersonalInformationComponent,
    PersonalCoursesComponent,
    TitleStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
