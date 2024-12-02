import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarianRoutingModule } from './librarian-routing.module';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule
  ]
})
export class LibrarianModule { }
