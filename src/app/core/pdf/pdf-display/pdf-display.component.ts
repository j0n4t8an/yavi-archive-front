import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-pdf-display',
  templateUrl: './pdf-display.component.html',
  styleUrl: './pdf-display.component.scss'
})
export class PdfDisplayComponent {
  pdfTitle: string = 'Geografía universal';
  pdfUrl: string = '/assets/pdfs/Geografía universal .pdf'; 

  constructor(public sanitizer: DomSanitizer) {}

  openComments() {
 
    alert('Sección de comentarios abierta');
  }
}
