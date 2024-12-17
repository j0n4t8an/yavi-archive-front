import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  protected data: any[] = []; 
  protected filteredData: any[] = []; 
  protected searchTerm: string = ''; 

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications(); 
  }

  //Carga las notificaciones desde el servicio.
  loadNotifications(): void {
    const params = { page: 1, limit: 10 };
    this.notificationService.getNotifications(params).subscribe({
      next: (response) => {
        console.log('Notificaciones recibidas:', response);
        this.data = response.data || response;
        this.filteredData = [...this.data];
      },
      error: (err) => {
        console.error('Error al obtener notificaciones:', err);
      },
    });
  }
  
  //Elimina una notificación por su ID.@param id ID de la notificación a eliminar
  deleteNotification(id: string): void {
    this.notificationService.deleteNotification(id).subscribe({
      next: () => {
        console.log('Notificación eliminada');
        this.loadNotifications(); // Recarga las notificaciones visibles
      },
      error: (err) => {
        console.error('Error al eliminar notificación:', err);
      },
    });
  }

  //Envía un mensaje de bienvenida al usuario.@param userId ID del usuario al que se enviará el mensaje de bienvenida
  sendWelcomeMessage(userId: string): void {
    this.notificationService.createWelcomeMessage(userId).subscribe({
      next: () => {
        console.log('Mensaje de bienvenida enviado');
        this.loadNotifications(); 
      },
      error: (err) => {
        console.error('Error al enviar mensaje de bienvenida:', err);
      },
    });
  }

  //Filtra las notificaciones basándose en el término de búsqueda ingresado
  filterNotifications(): void {
    const term = this.searchTerm.toLowerCase(); 
    this.filteredData = this.data.filter((notification) => {
      return (
        notification.type_of_notification.toLowerCase().includes(term) || 
        notification.message.toLowerCase().includes(term) || 
        new Date(notification.shipping_date)
          .toLocaleDateString()
          .toLowerCase()
      );
    });
  }
}