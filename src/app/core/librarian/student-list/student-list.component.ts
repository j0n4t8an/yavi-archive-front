import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/users-http.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  
  protected students: any;
  protected filteredStudents: any;
  protected searchTerm: string = '';

  constructor(private router: Router, private userService: UserService){
    this.getStudent();
  }


  getStudent() {
    this.userService.getStudents().subscribe(
      response => {
        console.log(response)
        this.students = response;
        this.filteredStudents = response
      },
      error => {
        console.error('Error al obtener los estudiantes:', error);
      }
    );
  }

  filterStudent() {
    if (this.searchTerm) {
      this.filteredStudents = this.students.filter((student: any) =>
        student.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredStudents = this.students;
      console.log(this.filteredStudents)
    }
  }
 
  deleteStudent(id:string){
    this.userService.deleteUser(id).subscribe(response => {
      this.getStudent();
    })
  }

}
