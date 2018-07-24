import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
