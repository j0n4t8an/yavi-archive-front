import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { NavbarModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    DividerModule,
    CardModule,
    DropdownModule,
    NavbarModule
]
})
export class StudentModule { }
