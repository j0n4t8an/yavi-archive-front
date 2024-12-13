import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/books-http.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {
  books: any[] = []; // Lista de libros
  dialogVisible: boolean = false;
  selectedBook: any = null;
  decodedToken: any={};

  constructor(private bookService: BookService) {}

  ngOnInit() {
    // Nos suscribimos al observable books$ para mantener la lista sincronizada
    /* this.bookService.books$.subscribe((books) => {
      this.books = books;
    }); */
  }
  

  viewDetails(book: any) {
    this.selectedBook = book;
    this.dialogVisible = true;
  }

  downloadBook(book: any) {
    // Lógica para descargar el libro (puedes implementarlo según tu caso)
    alert(`Descargando el libro: ${book.title}`);
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