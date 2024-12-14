import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CreatePdfModel } from '../../../models/pdf.model';
import { Router } from '@angular/router';
import { PdfService } from '../../../services/pdf-http.service';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrl: './pdf-form.component.scss'
})
export class PdfFormComponent {
  protected form!: FormGroup;
  uploadedFiles: any[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private pdfService: PdfService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      filePath: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  // Método para manejar la subida de archivos
  onUpload(event:FileUploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

  // Método para agregar el PDF al sistema
  /* addPdf(): void {
    if (this.form.valid) {
      const createPdf = { ...this.form.value, files: this.uploadedFiles };
      this.pdfService.addPdf(createPdf).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/library/library-list']);
        },
        (error) => {
          alert('Error al crear el PDF');
          console.error('Error al crear el PDF:', error);
        }
      );
    } else {
      alert('Por favor, complete el formulario correctamente');
    }
  } */
}