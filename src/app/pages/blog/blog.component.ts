import { Component, signal } from '@angular/core';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Introducción a Angular Signals',
      excerpt: 'Descubre cómo las signals revolucionan la gestión de estado en Angular 17 y mejoran el rendimiento de tus aplicaciones.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2024-01-15'),
      readTime: 5,
      tags: ['Angular', 'Signals', 'Estado']
    },
    {
      id: 2,
      title: 'Mejores Prácticas en TypeScript',
      excerpt: 'Aprende a escribir código TypeScript más limpio y mantenible con estas técnicas avanzadas y patrones recomendados.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2024-01-10'),
      readTime: 8,
      tags: ['TypeScript', 'Buenas Prácticas', 'Clean Code']
    },
    {
      id: 3,
      title: 'Optimización de Performance Web',
      excerpt: 'Técnicas esenciales para mejorar el rendimiento de tus aplicaciones web y ofrecer una mejor experiencia de usuario.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2024-01-05'),
      readTime: 12,
      tags: ['Performance', 'Optimización', 'UX']
    },
    {
      id: 4,
      title: 'Arquitectura de Microservicios',
      excerpt: 'Guía completa para diseñar y implementar una arquitectura de microservicios escalable y mantenible.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2023-12-28'),
      readTime: 15,
      tags: ['Arquitectura', 'Microservicios', 'Backend']
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'Comparación detallada entre CSS Grid y Flexbox, cuándo usar cada uno y ejemplos prácticos de implementación.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2023-12-20'),
      readTime: 7,
      tags: ['CSS', 'Layout', 'Frontend']
    },
    {
      id: 6,
      title: 'Testing con Jest y Cypress',
      excerpt: 'Estrategias efectivas para testing unitario e integración en aplicaciones modernas de JavaScript.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Desarrollador',
      date: new Date('2023-12-15'),
      readTime: 10,
      tags: ['Testing', 'Jest', 'Cypress']
    }
  ]);
}