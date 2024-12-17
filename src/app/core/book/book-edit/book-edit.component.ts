import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookService } from '../../../services/books-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModel } from '../../../models/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  protected form!: FormGroup;
  protected categories: [] = [];
  private bookId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.buildForm();
    this.findAllCategories();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      year_publication: [null, [Validators.required, Validators.min(1000), Validators.max(2100)]],
      file_path: [null, Validators.required],
      editorial: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      author: [null, [Validators.required]],
      categoriesId: [null, [Validators.required]],
      });
    }

    findAllCategories() {
      this.bookService.getCategories().subscribe(
        (response) => {
          this.categories = response.map((categories:CategoriesModel) => ({
            label: categories.name,
            value: categories.id
          }));
          console.log('Opciones formateadas para el dropdown:', this.categories);
        },
        (error) => {
          console.error('Error al obtener las categorias;', error);
        }
      );
    }

    ngOnInit(): void {
      // Obtener el ID del libro desde la ruta
      this.route.paramMap.subscribe(params => {
        this.bookId = params.get('id')!;
        if (this.bookId) {
          this.loadBookData(this.bookId);
        }
      });
  
      this.findAllCategories();
    }

    // Cargar los datos del libro en el formulario
  loadBookData(bookId: string) {
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
  }


  // Actualizar el libro
  updateBook() {
    if (this.form.valid) {
      this.bookService.updateBook(this.bookId, this.form.value).subscribe(
        (response) => {
          console.log('Libro actualizado correctamente:', response);
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Libro actualizado correctamente' });
          this.router.navigate(['/books']);
        },
        (error) => {
          console.error('Error al actualizar el libro:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el libro' });
        }
      );
    } else {
      console.warn('El formulario no es válido');
      this.form.markAllAsTouched();
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

  get filePathField(): AbstractControl {
    return this.form.controls['file_path'];
  }
  
  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }
  
  get categoriesIdField(): AbstractControl {
    return this.form.controls['categoriesId'];
  }
}
