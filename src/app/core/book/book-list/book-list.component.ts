import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/books-http.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  dialogVisible: boolean = false;
  editDialogVisible: boolean = false; // Controla la visibilidad del cuadro de diálogo de edición
  selectedBook: any = null;

  constructor(private bookService: BookService) {
  
  }

  ngOnInit() {
    // Nos suscribimos al observable books$ para actualizar la lista
    /* this.bookService.books$.subscribe((books) => {
      this.books = books;
    }); */
  }

  viewDetails(book: any) {
    this.selectedBook = book;
    this.dialogVisible = true;
  }

  editBook(book: any) {
    this.selectedBook = { ...book };
    this.editDialogVisible = true;
  }

  saveChanges() {
    const index = this.books.findIndex(b => b.title === this.selectedBook.title);
    if (index !== -1) {
      this.books[index] = { ...this.selectedBook };
      this.bookService.addBook(this.selectedBook);
    }
    this.editDialogVisible = false;
    alert('Libro actualizado: ' + this.selectedBook.title);
  }

  deleteBook(book: any) {
    this.books = this.books.filter(b => b !== book);
    this.bookService.addBook(book); // Actualiza la lista en el servicio después de eliminar
    alert('Libro eliminado: ' + book.title);
  }
}
