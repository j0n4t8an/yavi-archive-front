import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfService } from '../../../services/pdf-http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../services/comments-http.service';
import { CreateCommentModel } from '../../../models/comment.model';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-pdf-display',
  templateUrl: './pdf-display.component.html',
  styleUrl: './pdf-display.component.scss'
})
export class PdfDisplayComponent {
  form!: FormGroup;
  comments: string[] = [];
  decodedToken: any={};
  bookData:any = {};
  protected pdfData : any | undefined;

  constructor(
    public sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private pdfService: PdfService,
    private commentService: CommentService,
  ) {
      this.buildForm();
      this.loadComments();
      this.getFileUrl();
      
    }

    buildForm(): void {
      this.form = this.formBuilder.group({
        comment: ['', [Validators.required, Validators.minLength(5)]],
        userId: [null, [Validators.required]],
        bookId: [null, [Validators.required]]
      });
      this.getToken();
    }

    getFileUrl(): void {
      const bookData = sessionStorage.getItem('book'); 
      if (bookData) {
        try {
          const parsedBookData = JSON.parse(bookData); 
          const filePath = parsedBookData.file_path; 
          this.pdfData = { fileUrl: filePath }; 
          console.log('File URL retrieved:', this.pdfData);
        } catch (error) {
          console.error('Error parsing book data from sessionStorage:', error);
        }
      } else {
        console.warn('No book data found in sessionStorage');
        this.pdfData = { fileUrl: null }; 
      }
    }
  
    loadComments(): void {
      this.commentService.getComments().subscribe({
        next: (data: any[]) => {
          this.comments = data.map((comment) => comment.comment); 
        },
        error: (err) => {
          console.error('Error al cargar comentarios:', err);
        },
      });
    }

    createComment() {
      console.log(this.form.value);
      if (this.form.valid) {
        const createComment: CreateCommentModel = this.form.value;
        this.commentService.createComment(createComment).subscribe(
          response => {
            console.log(response);
            this.loadComments();
            // Resetear solo el campo 'comment' después de enviar el formulario
            this.form.controls['comment'].reset();
          },
          error => {
            alert('Error al crear el comentario');
            console.error('Error al crear el comentario:', error);
          }
        );
      } else {
        alert('Por favor, complete el formulario correctamente');
      }
    }
    
    
    fetchPdfById(id: string): void {
      this.pdfService.getPdfById(id).subscribe(
        (res) => {
          console.log('PDF encontrado:', res);
          this.pdfData = res;
        },
        (err) => {
          console.error('Error al obtener el PDF:', err);
        }
      );
    }

    getToken() {
  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      this.decodedToken = jwt_decode.jwtDecode(token);
      this.bookData = sessionStorage.getItem('book');
      this.bookData = JSON.parse(this.bookData);
      console.log('Book Data:', this.bookData);
      this.form.patchValue({
        userId: this.decodedToken.id,
        bookId: this.bookData.id 
      });
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.log('No token found in sessionStorage');
  }
}


    get commentField(): AbstractControl {
      return this.form.controls['comment'];
    }

    get userIdField(): AbstractControl {
      return this.form.controls['userId'];
    }
    
    get bookIdField(): AbstractControl {
      return this.form.controls['bookId'];
    }
}
