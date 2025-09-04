import { Component, signal } from '@angular/core';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience = signal([
    {
      company: 'Tech Solutions Inc',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      description: 'Liderando el desarrollo de aplicaciones web escalables con Angular y Node.js.'
    },
    {
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Desarrollé interfaces de usuario modernas y responsivas para clientes empresariales.'
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Inicio en el desarrollo web, trabajando en proyectos diversos y aprendiendo tecnologías modernas.'
    }
  ]);
  
  education = signal([
    {
      degree: 'Máster en Desarrollo Web',
      institution: 'Universidad Tecnológica',
      year: '2019'
    },
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Nacional',
      year: '2017'
    }
  ]);
  
  aboutImage = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600';
}