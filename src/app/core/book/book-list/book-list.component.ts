import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/books-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  protected books: any = [];
  protected filteredBooks: any;
  protected searchTerm: string='';

  dialogVisible: boolean = false;
  editDialogVisible: boolean = false; // Controla la visibilidad del cuadro de diálogo de edición
  selectedBook: any = null;

  constructor(private bookService: BookService, private router : Router) {
    this.getBook();
  }

  
  viewDetails(book: any) {
    this.selectedBook = book;
    this.dialogVisible = true;
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
 
  deleteBook(id:string){
    this.bookService.deleteBook(id).subscribe(response => {
      this.getBook();
    })
  }
}
