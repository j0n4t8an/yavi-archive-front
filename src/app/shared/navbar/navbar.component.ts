import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  menuItems: any[] = []; // Opciones del menú
  userTypeId: string | null = null; // Almacenará el userTypeId del token

  constructor(private router: Router) {
    this.loadMenuItems();
  }

  

  // Método para verificar si el usuario ha iniciado sesión
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  // Método para cerrar sesión
  logout(): void {
    sessionStorage.clear();
    this.menuItems = []; // Limpia las opciones del menú al cerrar sesión
    this.router.navigate(['/home']);
  }

  // Método para decodificar el token y obtener userTypeId
  getUserTypeIdFromToken(): string | null {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el payload del token
        return payload.userTypeId || null; // Obtener userTypeId del payload
      } catch (error) {
        console.error('Error al decodificar el token', error);
        return null;
      }
    }
    return null;
  }

  // Cargar las opciones del menú según el userTypeId
  loadMenuItems(): void {
    if (this.isLoggedIn()) {
      this.userTypeId = this.getUserTypeIdFromToken();

      if (this.userTypeId === '5ee824ae-4ce3-4115-88e0-4926c3d0ef07') {
        // Opciones si el userTypeId coincide
        this.menuItems = [
          {
            label: 'Libros',
            icon: 'pi pi-book',
            routerLink: '/core/library/library-list'
          },
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            items: [
              { label: 'Editar datos', icon: 'pi pi-pencil', routerLink: '/core/student/student-form' },
              { label: 'Comentarios', icon: 'pi pi-comments', routerLink: '/core/comments/comments-list' },
              { label: 'Notificaciones', icon: 'pi pi-bell', routerLink: '/core/notification/notification-list' }
            ]
          }
        ];
      } else {
        this.menuItems = [
          {
            label: 'Libros',
            icon: 'pi pi-book',
            items: [
              { label: 'Registrar libro', icon: 'pi pi-plus', routerLink: '/core/book/book-form' },
              { label: 'Lista de libros', icon: 'pi pi-book', routerLink: '/core/book/book-list' }
            ]
          },
          {
            label: 'Estudiantes',
            icon: 'pi pi-users',
            items: [
              { label: 'Eliminar estudiantes', icon: 'pi pi-user-minus', routerLink: '/core/librarian/student-list' }
            ]
          }
        ];
      }
    } else {
      this.menuItems = [];
    }
  }
}