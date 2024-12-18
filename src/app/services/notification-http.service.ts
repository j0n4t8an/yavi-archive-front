import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Interfaces para tipado fuerte
export interface Notification {
  id: string;
  type_of_notification: string;
  message: string;
  shipping_date: Date;
  user_id: string;
  status?: string;
}

export interface NotificationParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  [key: string]: any;
}

export interface NotificationResponse {
  data: Notification[];
  total: number;
  page: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Configuración de URL base 
  private readonly baseUrl = 'http://localhost:3000/api/notifications';

  // Headers estándar para las solicitudes
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {}

  // Método para obtener notificaciones con parámetros flexibles
  getNotifications(params: NotificationParams = {}): Observable<NotificationResponse> {
    // Convertir parámetros a HttpParams
    const httpParams = Object.keys(params).reduce((acc, key) => {
      if (params[key] !== undefined && params[key] !== null) {
        return acc.set(key, params[key].toString());
      }
      return acc;
    }, new HttpParams());

    return this.http.get<NotificationResponse>(this.baseUrl, { 
      params: httpParams,
      headers: this.headers
    }).pipe(
      map(response => {
        // Transformar fechas de string a Date
        if (response.data) {
          response.data = response.data.map(notification => ({
            ...notification,
            shipping_date: new Date(notification.shipping_date)
          }));
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  // Método para crear una nueva notificación
  createNotification(notification: Partial<Notification>): Observable<Notification> {
    return this.http.post<Notification>(this.baseUrl, notification, { 
      headers: this.headers 
    }).pipe(
      map(response => ({
        ...response,
        shipping_date: new Date(response.shipping_date)
      })),
      catchError(this.handleError)
    );
  }

  // Método para actualizar una notificación existente
  updateNotification(id: string, data: Partial<Notification>): Observable<Notification> {
    return this.http.patch<Notification>(`${this.baseUrl}/${id}`, data, { 
      headers: this.headers 
    }).pipe(
      map(response => ({
        ...response,
        shipping_date: new Date(response.shipping_date)
      })),
      catchError(this.handleError)
    );
  }

  // Método para eliminar una notificación
  deleteNotification(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { 
      headers: this.headers 
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Método para enviar mensaje de bienvenida
  createWelcomeMessage(userId: string): Observable<Notification> {
    return this.http.post<Notification>(`${this.baseUrl}/welcome-message`, 
      { userId }, 
      { headers: this.headers }
    ).pipe(
      map(response => ({
        ...response,
        shipping_date: new Date(response.shipping_date)
      })),
      catchError(this.handleError)
    );
  }

  // Método de manejo de errores centralizado
  private handleError(error: any) {
    let errorMessage = 'Ocurrió un error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // Método de utilidad para obtener una notificación por ID
  getNotificationById(id: string): Observable<Notification> {
    return this.http.get<Notification>(`${this.baseUrl}/${id}`, { 
      headers: this.headers 
    }).pipe(
      map(response => ({
        ...response,
        shipping_date: new Date(response.shipping_date)
      })),
      catchError(this.handleError)
    );
  }

  // Método para marcar notificaciones como leídas
  markNotificationsAsRead(ids: string[]): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/mark-read`, 
      { notificationIds: ids }, 
      { headers: this.headers }
    ).pipe(
      catchError(this.handleError)
    );
  }
}