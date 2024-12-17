import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../services/books-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  protected form!: FormGroup;
  private bookId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del libro desde los parámetros de la ruta
    this.bookId = this.activatedRoute.snapshot.params['id'];
    if (this.bookId) {
      this.loadBookData(this.bookId); // Cargar los datos del libro con el ID
    } else {
      console.error('ID del libro no proporcionado');
    }

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

  // Cargar los datos del libro en el formulario
  loadBookData(bookId: string): void {
    this.bookService.getBookById(bookId).subscribe(
      (book) => {
        this.form.patchValue({
          title: book.title,
          year_publication: book.year_publication,
          editorial: book.editorial,
          description: book.description,
          author: book.author,
        });
      },
      (error) => {
        console.error('Error al cargar el libro:', error);
      }
    );
  }

  // Actualizar el libro
  updateBook(): void {
    if (this.form.valid && this.bookId) {
      const updatedBook = this.form.value;
      console.log('Datos actualizados del libro:', updatedBook);
      console.log('ID del libro:', this.bookId);

      this.bookService.updateBook(this.bookId, updatedBook).subscribe(
        (response) => {
          console.log('Libro actualizado correctamente:', response);
          this.router.navigate(['/core/book/book-list']); // Redirigir a la lista de libros
        },
        (error) => {
          console.error('Error al actualizar el libro:', error);
        }
      );
    } else {
      console.log('Formulario no válido:', this.form.value);
      this.form.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

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
