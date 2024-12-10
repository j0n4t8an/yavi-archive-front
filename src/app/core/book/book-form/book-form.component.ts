import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { BookService } from '../../../services/books-http.service';
import { CreateBookModel } from '../../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
  providers: [MessageService],
})
export class BookFormComponent {
  protected form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private bookService: BookService,
    private router: Router
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      yearPublication: [null, [Validators.required, Validators.min(1000), Validators.max(2100)]],
      editorial: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      authorId: [null, [Validators.required]],
      categoriesId: [null, [Validators.required]],
    });
  }

  // Método para agregar un nuevo libro
  addBook() {
    if (this.form.valid) {

      const createBook:CreateBookModel = this.form.value;
      this.bookService.addBook(createBook).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/core/book/book-list']);
        },
        error => {
          alert('Error al crear el libro');
          console.error('Error al crear el libro:', error);
        }
      );
    } else {
      alert('Por favor, complete el formulario correctamente');
    }
  }  

  // Mensajes de éxito y error
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Libro creado',
      detail: 'El libro se ha añadido exitosamente.',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Por favor, completa correctamente todos los campos.',
    });
  }

  // Getters para validaciones
  get titleField(): AbstractControl {
    return this.form.controls['title'];
  }

  get yearPublicationField(): AbstractControl {
    return this.form.controls['yearPublication'];
  }
  
  get editorialField(): AbstractControl {
    return this.form.controls['editorial'];
  }
  
  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }

  get authorIdField(): AbstractControl {
    return this.form.controls['authorId'];
  }
  
  get categoriesIdField(): AbstractControl {
    return this.form.controls['categoriesId'];
  }
}
