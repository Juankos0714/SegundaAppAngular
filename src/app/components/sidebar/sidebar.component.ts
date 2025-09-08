import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = signal(false);
  
  menuItems = [
    { icon: '🏠', label: 'Dashboard', route: '/' },
    { icon: '👤', label: 'Perfil', route: '/about' },
    { icon: '🚀', label: 'Proyectos', route: '/projects' },
    { icon: '📝', label: 'Blog', route: '/blog' },
    { icon: '📞', label: 'Contacto', route: '/contact' }
  ];
  
  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}