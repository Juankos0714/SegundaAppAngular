import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Juankos0714', icon: faGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-camilo-rojas-ospina-453793175/', icon: faLinkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/juanxspina/', icon: faInstagram }
  ];
}