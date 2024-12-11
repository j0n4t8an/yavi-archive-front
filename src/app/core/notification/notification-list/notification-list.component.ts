import { Component, OnInit } from '@angular/core';
/* import { NotificationService } from '../../../services/notification.service';
 */
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  data: any[] = [];

  constructor(/*private notificationService: NotificationService*/) {}

  ngOnInit(): void {
    /* this.loadNotifications(); */
  }

  // Cargar todas las notificaciones
  /* loadNotifications(): void {
    this.notificationService.getNotifications().subscribe({
      next: (response) => {
        this.data = response.data; // Asume que el backend devuelve { data: [...] }
      },
      error: (err) => {
        console.error('Error fetching notifications:', err);
      },
    });
  } */
  editNotification(notification: any): void {
    // Implementa la lógica para abrir un formulario o un modal de edición
    console.log('Editar notificación:', notification);
  }
  
  /* deleteNotification(id: string): void {
    this.notificationService.deleteNotification(id).subscribe({
      next: () => {
        console.log('Notificación eliminada');
        this.loadNotifications(); // Recargar la lista después de eliminar
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
        this.loadNotifications(); // Recargar la lista
      },
      error: (err) => {
        console.error('Error enviando mensaje de bienvenida:', err);
      },
    });
  } */
}