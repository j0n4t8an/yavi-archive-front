import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl =  'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  // Método para agregar un libro
  addBook(createBook: CreateBookModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/books`,createBook); 
  }
}
