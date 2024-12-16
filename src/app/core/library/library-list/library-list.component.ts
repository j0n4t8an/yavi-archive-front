import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../services/books-http.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent {
  protected books: any;
  protected filteredBooks: any;
  protected searchTerm: string='';

  dialogVisible: boolean = false;
  selectedBook: any = null;
  decodedToken: any={};

  constructor(private bookService: BookService, private router: Router) {
    this.getBook();
  }

  getBook() {
    this.bookService.getBooks().subscribe(
      response => {
        console.log(response)
        this.books = response;
        this.filteredBooks = response
      },
      error => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }

  filterBook() {
    if (this.searchTerm) {
      this.filteredBooks = this.books.filter((book: any) =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.editorial.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.year_publication.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBooks = this.books;
    }
  }
 
  readBook(book: any) {
    // Almacena los datos del libro seleccionado en sessionStorage
    sessionStorage.setItem('book', JSON.stringify(book));
    
    // Redirige a la página para mostrar el PDF
    this.router.navigate(['/core/pdf/pdf-display']);
  }
getToken() {
  const token = sessionStorage.getItem('token');

  if (token) {
    try {
      // Decodificar el token
      this.decodedToken = jwt_decode.jwtDecode(token);
      console.log('Decoded Token:', this.decodedToken);
      if (this.decodedToken) {
        console.log('User ID:', this.decodedToken.id || 'No ID in token');
        console.log('User Email:', this.decodedToken.email || 'No Email in token');
        console.log('User Name:', this.decodedToken.firstName || 'No Name in token');
      } else {
        console.log('Decoded token is null or undefined');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.log('No token found in sessionStorage');
  }
}

}