import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books = [
    {
      title: 'Libro de programación',
      description: 'Programación orientada de una manera general dirigida hacia el público principal en base a la programación',
      image: 'https://th.bing.com/th/id/OIP.uqYlz7m46ATpAsQ46e1IqwHaKM?rs=1&pid=ImgDetMain',
      url: '/auth/login' 
    },
    {
      title: 'Python, Importancias',
      description: 'Programación orientada de una manera general dirigida hacia el público principal en base a la programación',
      image: 'https://th.bing.com/th/id/OIP.RbBIk5hqu5zIDRWqNuxuKAHaJn?rs=1&pid=ImgDetMain',
      url: '/auth/login'
    },
    {
      title: '¿Aprendes mejor con Python?',
      description: 'Programación orientada de una manera general dirigida hacia el público principal en base a la programación',
      image: 'https://imagessl5.casadellibro.com/a/l/t7/75/9788412286175.jpg',
      url: '/auth/login'
    },
    {
      title: 'Java Avanzado',
      description: 'Explora conceptos avanzados de Java y cómo aplicarlos a proyectos del mundo real.',
      image: 'https://th.bing.com/th/id/OIP.9SWpbmD2HwdaQNMewJQqiAHaJm?rs=1&pid=ImgDetMain',
      url: '/auth/login'
    },
    {
      title: 'Frontend Moderno',
      description: 'Aprende las mejores prácticas para desarrollar aplicaciones modernas con Angular.',
      image: 'https://th.bing.com/th/id/R.dfade8053d02acd15826288da564eed4?rik=SrOEQNoPen6j%2fQ&riu=http%3a%2f%2fwww.agapea.com%2fportada-i6n8292871.jpg&ehk=hW7YCEFGtq31e9uabW6LtEiYzrzenvYjAHScY3hp%2bIg%3d&risl=&pid=ImgRaw&r=0',
      url: '/auth/login'
    },
    {
      title: 'Java Avanzado',
      description: 'Explora conceptos avanzados de Java y cómo aplicarlos a proyectos del mundo real.',
      image: 'https://th.bing.com/th/id/OIP.9SWpbmD2HwdaQNMewJQqiAHaJm?rs=1&pid=ImgDetMain',
      url: '/auth/login'
    },
    {
      title: 'Java Avanzado',
      description: 'Explora conceptos avanzados de Java y cómo aplicarlos a proyectos del mundo real.',
      image: 'https://th.bing.com/th/id/OIP.9SWpbmD2HwdaQNMewJQqiAHaJm?rs=1&pid=ImgDetMain',
      url: '/auth/login'
    },
    {
      title: 'Java Avanzado',
      description: 'Explora conceptos avanzados de Java y cómo aplicarlos a proyectos del mundo real.',
      image: 'https://th.bing.com/th/id/OIP.9SWpbmD2HwdaQNMewJQqiAHaJm?rs=1&pid=ImgDetMain',
      url: '/auth/login'
    },
  ];

  groupedBooks: any[][] = [];

  constructor(private router: Router) {
    this.groupBooks();
  }

  private groupBooks() {
    const groupSize = 4;
    this.groupedBooks = [];
    for (let i = 0; i < this.books.length; i += groupSize) {
      this.groupedBooks.push(this.books.slice(i, i + groupSize));
    }
  }

  navigateToBook(url: string) {
    this.router.navigate([url]); // Redirige a la URL del libro
  }
}
