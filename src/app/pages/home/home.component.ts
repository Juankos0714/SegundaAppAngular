import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
import { faCheckCircle, faCircleUser, faAlarmClock, faUser  } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StatsCardComponent, SkillsComponent, TestimonialsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  stats = [
    { icon: faCheckCircle, number: '10+', label: 'Proyectos Completados', color: 'blue' },
    { icon: faCircleUser, number: '5+', label: 'Clientes Satisfechos', color: 'green' },
    { icon: faAlarmClock, number: '2+', label: 'Años de Experiencia', color: 'orange' },
    { icon: faUser, number: '4', label: 'Premios Obtenidos', color: 'purple' }
  ];
}