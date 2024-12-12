import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { NavbarModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LibraryListComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NavbarModule,
    ButtonModule
  ],
})
export class LibraryModule { }
