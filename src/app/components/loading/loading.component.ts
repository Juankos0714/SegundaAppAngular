import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input() message: string = 'Cargando...';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  dots = signal('');
  
  ngOnInit() {
    // Animación de puntos
    setInterval(() => {
      this.dots.update(current => {
        if (current.length >= 3) return '';
        return current + '.';
      });
    }, 500);
  }
}