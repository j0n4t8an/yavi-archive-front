import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PdfDisplayComponent
  ],
  imports: [
    CommonModule,
    PdfRoutingModule,
    PdfViewerModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PdfModule { }
