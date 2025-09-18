import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';
  
  isDarkMode = signal<boolean>(false);
  
  constructor() {
    this.initializeTheme();
  }
  
  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }
    
    this.applyTheme();
    this.listenToSystemChanges();
  }
  
  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.applyTheme();
    this.saveThemePreference();
  }
  
  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    this.applyTheme();
    this.saveThemePreference();
  }
  
  private applyTheme(): void {
    const isDark = this.isDarkMode();
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  
  private saveThemePreference(): void {
    const theme = this.isDarkMode() ? 'dark' : 'light';
    localStorage.setItem(this.THEME_KEY, theme);
  }
  
  private listenToSystemChanges(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (!savedTheme) {
        this.isDarkMode.set(e.matches);
        this.applyTheme();
      }
    });
  }
}