import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MaterialModule } from './../modules/material.module';

@NgModule({
  declarations: [FooterComponent,NavbarComponent,SidemenuComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  exports: [FooterComponent,NavbarComponent,SidemenuComponent] 
})
export class CoreModule { }
