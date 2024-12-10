import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserModel } from '../models/user.model';

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
}
