import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {
  comment = [
    { author: 'Juan Pérez', comment: '¡Este artículo es muy interesante!', date: '2024-12-08 3:45 PM' },
    { author: 'María López', comment: 'Estoy completamente de acuerdo con este enfoque.', date: '2024-12-08 3:45 PM' },
    { author: 'Carlos Ramírez', comment: 'Gracias por compartir esta información.', date: '2024-12-08 3:45 PM' }
  ];
  comments = [
    {
      author: 'Juan Pérez',
      text: '¡Este artículo es muy interesante!',
      date: '2024-12-09 10:15 AM'
    },
    {
      author: 'María López',
      text: 'Estoy completamente de acuerdo con este enfoque.',
      date: '2024-12-08 3:45 PM'
    },
    {
      author: 'Carlos Ramírez',
      text: 'Gracias por compartir esta información.',
      date: '2024-12-07 8:30 AM'
    }
  ];
}