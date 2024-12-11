import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    TableModule,
    ListboxModule
  ]
})
export class CommentsModule { }