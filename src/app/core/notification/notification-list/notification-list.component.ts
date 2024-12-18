import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG imports
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { NotificationService, Notification, NotificationResponse } from '../../../services/notification-http.service';
import { Subject } from 'rxjs';
import { takeUntil, catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit, OnDestroy {
  protected data: Notification[] = [];
  protected filteredData: Notification[] = [];
  protected searchTerm = '';
  protected isLoading = false;
  
  private destroy$ = new Subject<void>();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadNotifications(): void {
    this.isLoading = true;
    const params = { page: 1, limit: 10 };
    
    this.notificationService.getNotifications(params)
      .pipe(
        takeUntil(this.destroy$),
        catchError(err => {
          console.error('Error al obtener notificaciones:', err);
          this.isLoading = false;
          return [];
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(response => {
        const notificationData: Notification[] = 
          Array.isArray(response) 
            ? response 
            : (response as NotificationResponse).data || [];
        
        this.data = notificationData;
        this.filteredData = [...this.data];
      });
  }

  deleteNotification(id: string): void {
    this.isLoading = true;
    this.notificationService.deleteNotification(id)
      .pipe(
        takeUntil(this.destroy$),
        catchError(err => {
          console.error('Error al eliminar notificación:', err);
          this.isLoading = false;
          return [];
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(() => {
        this.data = this.data.filter(notification => notification.id !== id);
        this.filteredData = this.filteredData.filter(notification => notification.id !== id);
      });
  }

  sendWelcomeMessage(userId: string): void {
    this.isLoading = true;
    this.notificationService.createWelcomeMessage(userId)
      .pipe(
        takeUntil(this.destroy$),
        catchError(err => {
          console.error('Error al enviar mensaje de bienvenida:', err);
          this.isLoading = false;
          return [];
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  filterNotifications(): void {
    const term = this.searchTerm.toLowerCase().trim();
    
    this.filteredData = this.data.filter((notification) => {
      return (
        (notification.type_of_notification?.toLowerCase().includes(term) || false) ||
        (notification.message?.toLowerCase().includes(term) || false) ||
        (new Date(notification.shipping_date)
          .toLocaleDateString()
          .toLowerCase()
          .includes(term) || false)
      );
    });
  }
}