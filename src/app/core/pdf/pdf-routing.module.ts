import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';

const routes: Routes = [
  {
    path:'pdf-display',
    component: PdfDisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfRoutingModule { }
