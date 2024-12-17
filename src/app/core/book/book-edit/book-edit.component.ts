import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../services/books-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  protected form!: FormGroup;
  private book: any = {}

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      year_publication: [null, [Validators.required, Validators.min(1000), Validators.max(2100)]],
      editorial: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      author: [null, [Validators.required]],
      });
    }

      getBook() {
        this.book = sessionStorage.getItem('book');
        const bookId = this.book.id
      
        if (bookId) {
          this.form.patchValue({
            title: this.book.title,
            editorial: this.book.editorial,
            author: this.book.author,
            year_publication: this.book.year_publication,
            description: this.book.description,
          });
        } else {
          console.error('No se pudo obtener el ID del libro.');
        }
      }
      

    // Cargar los datos del libro en el formulario
  /* loadBookData(bookId: string) {
    this.bookService.getBooks().subscribe(
      (books) => {
        const book = books.find((b: any) => b.id === bookId);
        if (book) {
          this.form.patchValue({
            title: book.title,
            year_publication: book.year_publication,
            file_path: book.file_path,
            editorial: book.editorial,
            description: book.description,
            author: book.author,
            categoriesId: book.categoriesId
          });
        } else {
          console.error('Libro no encontrado');
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Libro no encontrado' });
        }
      },
      (error) => {
        console.error('Error al cargar los datos del libro:', error);
      }
    );
  } */


  // Actualizar el libro
  /* updateBook() {
    if (this.form.valid) {
      this.bookService.updateBook(this.bookId, this.form.value).subscribe(
        (response) => {
          console.log('Libro actualizado correctamente:', response);
          this.router.navigate(['/books']);
        },
        (error) => {
          console.error('Error al actualizar el libro:', error);
        }
      );
    } else {
      console.warn('El formulario no es válido');
      this.form.markAllAsTouched();
    }
  }
     */
    // Getters para validaciones
  get titleField(): AbstractControl {
    return this.form.controls['title'];
  }

  get yearPublicationField(): AbstractControl {
    return this.form.controls['year_publication'];
  }
  
  get editorialField(): AbstractControl {
    return this.form.controls['editorial'];
  }

  get authorField(): AbstractControl {
    return this.form.controls['author'];
  }

  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }
  
}
