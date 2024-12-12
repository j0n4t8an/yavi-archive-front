import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { NavbarModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    LibraryListComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NavbarModule,
    ButtonModule,
    TableModule,
    DialogModule
  ],
})
export class LibraryModule { }
