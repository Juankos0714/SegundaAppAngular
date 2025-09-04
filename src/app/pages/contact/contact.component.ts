import { Component, signal } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = signal([
    {
      icon: '📧',
      label: 'Email',
      value: 'alex@ejemplo.com',
      link: 'mailto:alex@ejemplo.com'
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '+34 123 456 789',
      link: 'tel:+34123456789'
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Madrid, España',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/alex-developer',
      link: '#'
    }
  ]);
  
  workingHours = signal([
    { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
    { day: 'Domingo', hours: 'Cerrado' }
  ]);
  
  responseTime = signal('24 horas');
}