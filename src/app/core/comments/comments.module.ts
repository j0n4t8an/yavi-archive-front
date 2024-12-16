import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { NavbarModule } from "../../shared/shared.module";
import { CommentService } from '../../services/comments-http.service';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    TableModule,
    ListboxModule,
    NavbarModule
],providers: [CommentService]
})
export class CommentsModule { }