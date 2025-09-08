import { Component, signal } from '@angular/core';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserProfileComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience = signal([
    {
      company: 'Ubik', 
      position: 'Scrum Master',
      period: '2024 - Presente',
      description: 'Liderando el desarrollo de aplicaciones web escalables con Angular y Spring Boot.'
    },
    {
      company: 'ObraSmart',
      position: 'Frontend Developer',
      period: '2024 - 2025',
      description: 'Desarrollé interfaces de usuario modernas y responsivas para clientes empresariales.'
    }
  ]);
  
  education = signal([
    {
      degree: 'Analisis y desarrollo de Software',
      institution: 'SENA',
      year: '2024'
    },
    {
      degree: 'Desarrollo Web Full Stack',
      institution: 'Cymetria',
      year: '2024'
    }
  ]);
  
  aboutImage = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600';
}