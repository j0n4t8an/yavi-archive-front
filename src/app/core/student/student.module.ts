import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';


@NgModule({
  declarations: [
    StudentFormComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
