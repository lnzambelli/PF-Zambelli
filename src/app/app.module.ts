import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { PersonalCoursesComponent } from './components/personal-courses/personal-courses.component';
import { TitleStyleDirective } from './shared/directives/title-style.directive';
import { FullnamePipe } from './shared/pipes/fullname.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    LoginComponent,
    PersonalInformationComponent,
    PersonalCoursesComponent,
    TitleStyleDirective,
    FullnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    StudentsModule,
    CoursesModule,
    InscriptionsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
