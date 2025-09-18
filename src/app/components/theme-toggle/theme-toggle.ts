import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-toggle" 
      (click)="toggleTheme()"
      [attr.aria-label]="themeService.isDarkMode() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      title="{{ themeService.isDarkMode() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro' }}"
    >
      <span class="theme-icon">
        {{ themeService.isDarkMode() ? '☀️' : '🌙' }}
      </span>
      <span class="theme-text">
        {{ themeService.isDarkMode() ? 'Claro' : 'Oscuro' }}
      </span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      border-radius: 2rem;
      color: var(--text-color);
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
      min-height: 44px;
    }
    
    .theme-toggle:hover {
      background: var(--hover-bg);
      border-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow);
    }
    
    .theme-icon {
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }
    
    .theme-toggle:hover .theme-icon {
      transform: scale(1.1);
    }
    
    .theme-text {
      white-space: nowrap;
    }
    
    @media (max-width: 768px) {
      .theme-toggle {
        padding: 0.75rem 1.5rem;
        justify-content: center;
        width: 100%;
        max-width: 200px;
      }
      
      .theme-text {
        display: block;
      }
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}