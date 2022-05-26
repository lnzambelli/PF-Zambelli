import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentContainerComponent } from './components/student-container/student-container.component';
import { StudentAbmComponent } from './components/student-abm/student-abm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SidemenuComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentContainerComponent,
    StudentAbmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
