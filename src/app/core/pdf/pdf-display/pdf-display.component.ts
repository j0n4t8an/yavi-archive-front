import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-display',
  templateUrl: './pdf-display.component.html',
  styleUrl: './pdf-display.component.scss'
})
export class PdfDisplayComponent {
  pdfTitle: string = 'Geografía universal';
  pdfUrl: string = '/assets/Geografía universal .pdf'; // Ruta del PDF en tu proyecto

  constructor(public sanitizer: DomSanitizer) {}

  openComments() {
    // Acción al hacer clic en el botón de comentarios
    alert('Sección de comentarios abierta');
  }
}
