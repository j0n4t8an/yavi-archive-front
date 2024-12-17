import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
    {
      path:'book-form',
      component: BookFormComponent
    },
    {
      path:'book-list',
      component: BookListComponent
    },
    {
      path:'book-edit/:id',
      component: BookEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
