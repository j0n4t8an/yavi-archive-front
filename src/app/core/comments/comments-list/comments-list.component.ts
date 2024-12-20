import { Component } from '@angular/core';
import { CommentService } from '../../../services/comments-http.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {

  protected comments: any[] = [];
  protected filteredComments: any[] = [];

  protected searchTerm: string = '';
  decodedToken: any={};
  constructor(private commentService: CommentService, router: Router){
    this.getComment();

  }
  
  getComment() {
    this.getToken();
    return this.commentService.getCommentById(this.decodedToken.id).subscribe(
      response => {
        console.log(response)
        this.comments = response;
        console.log(this.filterComment);
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
        comment.comment.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredComments = this.comments;
      console.log(this.filteredComments)
    }
  }
 
  deleteComment(id:string){
    this.commentService.deleteComment(id).subscribe(response => {
      this.getComment();
    })
  }

  getToken() {
    const token = sessionStorage.getItem('token');
    if (token) {
    this.decodedToken = jwt_decode.jwtDecode(token);
    console.log(this.decodedToken)
    }
  }
}