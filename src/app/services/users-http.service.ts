import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserModel, EditUserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login/entry`, { email, password });
  }

  userCreate(createUser: CreateUserModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`,createUser);
  }

  userUpdate(id:string,EditUser: EditUserModel): Observable<any>{
    return this.http.put(`${this.apiUrl}/users/${id}`,EditUser);
  }
  
  findAllCarerrs():Observable<any> {
    return this.http.get(`${this.apiUrl}/career`);
  }

  getUser(id:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  getStudents(){
    return this.http.get(`${this.apiUrl}/users`);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
