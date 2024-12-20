import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { CardModule } from 'primeng/card';
import { FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NavbarModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    PdfDisplayComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PdfRoutingModule,
    ButtonModule,
    InputTextModule,
    AuthRoutingModule,
    CardModule,
    FileUploadModule,
    ToastModule,
    PdfViewerModule,
    FormsModule,
    NavbarModule
],
  providers: [MessageService] // Asegúrate de añadirlo a los proveedores
})
export class PdfModule { }