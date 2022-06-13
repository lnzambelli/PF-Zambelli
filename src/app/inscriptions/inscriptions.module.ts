import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsListComponent } from './inscriptions-list/inscriptions-list.component';

import { MaterialModule } from '../modules/material.module';
import { InscriptionsAbmComponent } from './inscriptions-abm/inscriptions-abm.component';

@NgModule({
  declarations: [InscriptionsListComponent, InscriptionsAbmComponent],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    MaterialModule
  ],
  exports: [InscriptionsListComponent]
})
export class InscriptionsModule { }
