import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl =  'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }
  getComments():Observable<any>{
    return this.http.get(`${this.apiUrl}/comments`)
  }

  createComment(comment: CreateCommentModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments`, comment);
  }
  addComment(createComment: CreateCommentModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments`,createComment); 
  }

  deleteComment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/comments/${id}`)
  }
  getCommentById(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments/${userId}`);
  }

  updateComment(id: string, comment: CreateCommentModel): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, comment);
  }
}
