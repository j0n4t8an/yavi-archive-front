import { Component } from '@angular/core';
import { CommentService } from '../../../services/comments-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {

  protected comments: any;
  protected filteredComments: any;
  protected searchTerm: string = '';

  constructor(private commentService: CommentService, router: Router){
  }

  /* getComment() {
    this.commentService.getComments().subscribe(
      response => {
        console.log(response)
        this.comments = response;
        this.filteredComments = response
      },
      error => {
        console.error('Error al obtener los comentarios:', error);
      }
    );
  }

  filterComment() {
    if (this.searchTerm) {
      this.filteredComments = this.comments.filter((comment: any) =>
        comment.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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
  } */
}