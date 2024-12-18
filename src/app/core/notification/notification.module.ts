import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG imports
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { NotificationRoutingModule } from './notification-routing.module';
import { NavbarModule } from "../../shared/shared.module";
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NotificationRoutingModule, // Asegúrate de importar el routing
    // PrimeNG modules
    TableModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    NavbarModule
],
})
export class NotificationModule { }