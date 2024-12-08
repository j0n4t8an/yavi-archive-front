import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-display',
  templateUrl: './pdf-display.component.html',
  styleUrl: './pdf-display.component.scss'
})
export class PdfDisplayComponent {
  pdfName = 'Documento de ejemplo.pdf';
  pdfSrc = 'pdf/pdf_archive/PROPUESTA PEDAGOGICA MATOVELLE.pdf'; 

  openComments() {
    console.log('Sección de comentarios abierta');
    
  }
}
