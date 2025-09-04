import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() icon: string = '';
  @Input() number: string = '';
  @Input() label: string = '';
  @Input() color: string = 'blue';
  
  isHovered = signal(false);
  
  onMouseEnter() {
    this.isHovered.set(true);
  }
  
  onMouseLeave() {
    this.isHovered.set(false);
  }
}