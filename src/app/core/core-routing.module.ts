import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'book',
    loadChildren:()=>import('./book/book.module').then(m=>m.BookModule)
  },
  {
    path:'comments',
    loadChildren:()=>import('./comments/comments.module').then(m=>m.CommentsModule)
  },
  {
    path:'librarian',
    loadChildren:()=>import('./librarian/librarian.module').then(m=>m.LibrarianModule)
  },
  {
    path:'library',
    loadChildren:()=>import('./library/library.module').then(m=>m.LibraryModule)
  },
  {
    path:'notification',
    loadChildren:()=>import('./notification/notification.module').then(m=>m.NotificationModule)
  },
  {
    path:'pdf',
    loadChildren:()=>import('./pdf/pdf.module').then(m=>m.PdfModule)
  },
  {
    path:'student',
    loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
