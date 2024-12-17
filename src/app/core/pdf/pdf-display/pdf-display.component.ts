import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfService } from '../../../services/pdf-http.service';
@Component({
  selector: 'app-pdf-display',
  templateUrl: './pdf-display.component.html',
  styleUrl: './pdf-display.component.scss'
})
export class PdfDisplayComponent {
  pdfData: any;


  constructor(public sanitizer: DomSanitizer, private pdfService: PdfService
  ) {}


  fetchPdfById(id: string): void {
    this.pdfService.getPdfById(id).subscribe(
      (res) => {
        console.log('PDF encontrado:', res);
        this.pdfData = res;
      },
      (err) => {
        console.error('Error al obtener el PDF:', err);
      }
    );
  }
  ngOnInit() {
    const book = JSON.parse(sessionStorage.getItem('book') || '{}');
    console.log(book); // Aquí puedes usar los datos del libro para mostrar el PDF u otros detalles
  }
  
  openComments() {
 
    alert('Sección de comentarios abierta');
  }
}
