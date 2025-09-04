import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StatsCardComponent, SkillsComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stats = [
    { icon: '🚀', number: '50+', label: 'Proyectos Completados', color: 'blue' },
    { icon: '👥', number: '25+', label: 'Clientes Satisfechos', color: 'green' },
    { icon: '⏱️', number: '5+', label: 'Años de Experiencia', color: 'orange' },
    { icon: '🏆', number: '15+', label: 'Premios Obtenidos', color: 'purple' }
  ];
}