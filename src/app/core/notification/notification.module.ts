import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [NotificationListComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    TableModule
  ],
})
export class NotificationModule {}
