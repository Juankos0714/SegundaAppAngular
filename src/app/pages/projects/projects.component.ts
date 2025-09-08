import { Component, signal } from '@angular/core';
import { ProjectCardComponent, Project } from '../../components/project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Angular',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analítico',
      description: 'Dashboard interactivo con gráficos en tiempo real para análisis de datos empresariales.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'App Móvil Fitness',
      description: 'Aplicación móvil para tracking de ejercicios con seguimiento de progreso y rutinas personalizadas.',
      image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoUrl: '#'
    },
    {
      id: 4,
      title: 'Sistema de Gestión CRM',
      description: 'Sistema completo de gestión de relaciones con clientes con automatización de procesos.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'API RESTful Microservicios',
      description: 'Arquitectura de microservicios escalable con autenticación JWT y documentación automática.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Node.js', 'Docker', 'AWS', 'Redis'],
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Plataforma de Aprendizaje',
      description: 'LMS completo con video streaming, exámenes en línea y certificaciones automáticas.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Angular', 'Spring Boot', 'AWS S3'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]);
  
  selectedFilter = signal('all');
  
  filteredProjects = signal(this.projects());
  
  filterProjects(technology: string) {
    this.selectedFilter.set(technology);
    if (technology === 'all') {
      this.filteredProjects.set(this.projects());
    } else {
      this.filteredProjects.set(
        this.projects().filter(project => 
          project.technologies.includes(technology)
        )
      );
    }
  }
  
  technologies = ['all', 'Angular', 'React', 'Node.js', 'Vue.js'];
}