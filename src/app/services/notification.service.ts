import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly baseUrl = 'http://localhost:3000/api/notifications'; 


  constructor(private http: HttpClient) {}

  getNotifications(params: any): Observable<any> {
    return this.http.get(this.baseUrl, { params });
  }

  createNotification(notification: any): Observable<any> {
    return this.http.post(this.baseUrl, notification);
  }

  deleteNotification(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createWelcomeMessage(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/welcome-message`, { userId });
  }

  updateNotification(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }
}
