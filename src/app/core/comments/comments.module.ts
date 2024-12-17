import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { NavbarModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    ButtonModule,
    TableModule,
    NavbarModule,
    FormsModule 
]
})
export class CommentsModule { }