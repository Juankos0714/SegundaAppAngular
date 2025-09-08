import { Component, signal } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = signal([
    {
      icon: '📧',
      label: 'Email',
      value: 'juankos0714@gmail.com',
      link: 'mailto:juankos0714@gmail.com'
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '+57 3234411258',
      link: 'tel:+57 3234411258'
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Armenia, Quindio, Colombia',
      link: 'https://maps.app.goo.gl/wTQ8gWCwE7xFfiGW6'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Juan Camilo Rojas',
      link: 'https://www.linkedin.com/in/juan-camilo-rojas-ospina-453793175/'
    }
  ]);
  
  workingHours = signal([
    { day: 'Lunes - Viernes', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
    { day: 'Domingo', hours: 'Cerrado' }
  ]);
  
  responseTime = signal('24 horas');
}