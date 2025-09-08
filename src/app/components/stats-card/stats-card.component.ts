import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() icon!: IconDefinition ;
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