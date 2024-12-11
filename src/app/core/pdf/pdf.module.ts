import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PdfDisplayComponent
  ],
  imports: [
    CommonModule,
    PdfRoutingModule,
    ButtonModule
  ]
})
export class PdfModule { }
