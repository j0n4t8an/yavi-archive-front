import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarianRoutingModule } from './librarian-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NavbarModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule,
    ButtonModule,
    TableModule,
    NavbarModule,
    FormsModule 
]
})
export class LibrarianModule { }
