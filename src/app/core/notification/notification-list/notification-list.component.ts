import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  data: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    const params = { page: 1, limit: 10 }; // Puedes usar parámetros de paginación si tu backend los soporta
    this.notificationService.getNotifications(params).subscribe({
      next: (response) => {
        this.data = response.data || response; // Maneja el formato de respuesta
      },
      error: (err) => {
        console.error('Error fetching notifications:', err);
      },
    });
  }

  deleteNotification(id: string): void {
    this.notificationService.deleteNotification(id).subscribe({
      next: () => {
        console.log('Notificación eliminada');
      // Recarga las notificaciones
      },
      error: (err) => {
        console.error('Error deleting notification:', err);
      },
    });
  }

  sendWelcomeMessage(userId: string): void {
    this.notificationService.createWelcomeMessage(userId).subscribe({
      next: () => {
        console.log('Mensaje de bienvenida enviado');
        this.loadNotifications();
      },
      error: (err) => {
        console.error('Error enviando mensaje de bienvenida:', err);
      },
    });
  }
}
