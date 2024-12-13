import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/books-http.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {
  books: any[] = []; // Lista de libros
  dialogVisible: boolean = false;
  selectedBook: any = null;

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
}
