import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatDividerModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule
  ],
  declarations: [

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
