import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {
    path:'student-form',
    component: StudentFormComponent
  },
  {
    path:'student-profile',
    component: StudentProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
