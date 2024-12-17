import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBookModel, UpdateBookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl =  'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  addBook(createBook: CreateBookModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/books`,createBook); 
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/books/${id}`)
  }

  sendPost(body: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/pdfs`, body);
  }

  updateBook(id: string, bookData: UpdateBookModel): Observable<any> {
    return this.http.patch(`${this.apiUrl}/books/${id}`, bookData);
  } 

  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/${bookId}`);
  }
  
}
