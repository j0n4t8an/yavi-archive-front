import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';
import { PdfFormComponent } from './pdf-form/pdf-form.component';

const routes: Routes = [
  {
    path:'pdf-display',
    component: PdfDisplayComponent
  },
  {
    path:'pdf-form',
    component: PdfFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfRoutingModule { }
