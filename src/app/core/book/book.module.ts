import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BookService } from '../../services/books-http.service';


@NgModule({
  declarations: [
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TableModule, 
    ButtonModule, 
    DialogModule, 
    MenubarModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  providers: [BookService]
})
export class BookModule { }
