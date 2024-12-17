import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  groupedBooks: any[][] = [];

  constructor(private router: Router) {
    this.groupBooks();
  }

  // Datos del carrusel (una sola imagen visible a la vez)
  carouselBooks = [
    {
      title: 'Introducción a la Programación',
      description:
        'Aprende los fundamentos de la programación con ejemplos prácticos y ejercicios interactivos.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBnKhijA_agrV8gSMXZCxVzDK3Av4O7HMhQ&s',
    },
    {
      title: 'Arte Culinario: Técnicas de Cocina',
      description:
        'Un recorrido por las técnicas esenciales de cocina profesional, con recetas modernas y clásicas.',
      image:
        'https://usil-blog.s3.amazonaws.com/PROD/blog/image/tecnicas-culinarias.jpg',
    },
    {
      title: 'Marketing Digital para Principiantes',
      description:
        'Domina las estrategias de marketing digital esenciales para crecer tu negocio en línea.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qbl7yL-yZcwav4qBKTUg0nwR20S42gJTaw&s',
    },
    {
      title: 'Diseño de Modas: Creatividad y Estilo',
      description:
        'Explora el mundo del diseño de modas, desde la inspiración hasta la creación de colecciones completas.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItB4lG8tN6w91eziY8rR3iY1NYx-cy6cNBw&s',
    },
    {
      title: 'Desarrollo Web con JavaScript',
      description:
        'Aprende a desarrollar aplicaciones web modernas utilizando JavaScript y frameworks populares.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGMhnB2cGM51IPcYsWTw99oRd97I67pYb3A&s',
    },
    {
      title: 'Culinaria Creativa: El Arte de la Cocina Moderna',
      description:
        'Un enfoque innovador para la cocina profesional, con técnicas avanzadas y recetas sorprendentes.',
      image:
        'https://m.media-amazon.com/images/I/61-B41Ote7L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Estrategias Avanzadas de Marketing en Redes Sociales',
      description:
        'Una guía completa sobre cómo aprovechar las redes sociales para impulsar tu marca y llegar a más clientes.',
      image:
        'https://anayamultimedia.es/imagenes/libros/grande/9788441540446-estrategias-de-marketing-digital.jpg',
    },
    {
      title: 'Diseño Gráfico para Creativos',
      description:
        'Aprende a crear diseños gráficos impactantes con herramientas y técnicas profesionales.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNuw4iVYNylMcJU7cZFrKo3UG_o-gPOwkvQ&s',
    }
  ];

  // Datos de las tarjetas dinámicas
  books = [
    {
      title: 'Libro de Angular',
      description: 'Aprende Angular desde cero con ejemplos claros.',
      image:
        'https://th.bing.com/th/id/OIP.uqYlz7m46ATpAsQ46e1IqwHaKM?rs=1&pid=ImgDetMain',
      url: '/auth/login',
    },
    {
      title: 'Marketing con redes modernas',
      description: 'Mejora tus habilidades en Marketing.',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/8441528861.01.LZZZZZZZ.jpg',
      url: '/auth/login',
    },
    {
      title: 'Backend con Node.js',
      description: 'Desarrolla servidores eficientes con Node.js.',
      image: 'https://imagessl5.casadellibro.com/a/l/t7/75/9788412286175.jpg',
      url: '/auth/login',
    },
    {
      title: 'Cocina para principiantes',
      description: 'Aprende a cocinar de la manera más sencilla en la cocina moderna.',
      image: 'https://m.media-amazon.com/images/I/41QG+OAzgKL._AC_UF1000,1000_QL80_.jpg',
      url: '/auth/login',
    },
  ];

  

  

  // Agrupar tarjetas en filas de 4
  private groupBooks() {
    const groupSize = 4;
    for (let i = 0; i < this.books.length; i += groupSize) {
      this.groupedBooks.push(this.books.slice(i, i + groupSize));
    }
  }

  // Navegación
  navigateToBook(url: string) {
    this.router.navigate([url]);
  }
}
