import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = signal({
    name: 'Juan Camilo Rojas',
    role: 'Senior Full Stack Developer',
    avatar: 'assets/profile.jpg',
    location: 'Armenia, Quindío, Colombia',
    joinDate: 'Enero 2023',
    projectsCount: 47,
    clientsCount: 23
  });
  
  isOnline = signal(true);
}