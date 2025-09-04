import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name = signal('Juan Camilo Rojas');
  title = signal('Full Stack Developer');
  description = signal('Creando experiencias digitales increíbles con tecnologías modernas');
  
  skills = signal([
    'Angular', 'React', 'Node.js', 'TypeScript', 'Python', 'Java', 'SQL', 'NoSQL'
  ]);

  profileImage = ('assets/profile.jpg');
}