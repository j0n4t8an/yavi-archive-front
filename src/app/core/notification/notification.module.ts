import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from "../../shared/shared.module";

@NgModule({
  declarations: [NotificationListComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    TableModule,
    FormsModule,
    NavbarModule
],
})
export class NotificationModule {}
