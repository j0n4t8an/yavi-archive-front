import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NavbarModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LibraryListComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ButtonModule,
    TableModule,
    NavbarModule,
    FormsModule 
    
  ],
})
export class LibraryModule { }
