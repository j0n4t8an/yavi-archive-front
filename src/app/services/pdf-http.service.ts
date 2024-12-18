import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePdfModel } from '../models/pdf.model';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private apiUrl =  'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pdf`);
  }

  getTittles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tittle`);
  }

  // Método para agregar un libro
  addPdf(createPdf: CreatePdfModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/pdfs`,createPdf); 
  }

  getPdfById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pdfs/${id}`);
  }
}