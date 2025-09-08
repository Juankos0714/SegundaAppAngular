import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'María González',
      role: 'CEO',
      company: 'Tech Solutions',
      message: 'Un desarrollador excepcional. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      role: 'CTO',
      company: 'StartupXYZ',
      message: 'Su expertise técnico y comunicación clara hicieron que nuestro proyecto fuera un éxito rotundo.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana López',
      role: 'Product Manager',
      company: 'Digital Corp',
      message: 'Profesional, creativo y siempre dispuesto a ir la milla extra. Altamente recomendado.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ]);
  
  currentTestimonial = signal(0);
  
  nextTestimonial() {
    this.currentTestimonial.update(current => 
      (current + 1) % this.testimonials().length
    );
  }
  
  prevTestimonial() {
    this.currentTestimonial.update(current => 
      current === 0 ? this.testimonials().length - 1 : current - 1
    );
  }
  
  getStars(rating: number): string[] {
    return Array(5).fill('⭐').map((_, index) => 
      index < rating ? '⭐' : '☆'
    );
  }
}