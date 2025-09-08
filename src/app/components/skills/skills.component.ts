import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = signal<Skill[]>([
    { name: 'Angular', level: 30, category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 70, category: 'Frontend', icon: '📘' },
    { name: 'React', level: 60, category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', level: 75, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 70, category: 'Backend', icon: '🐍' },
    { name: 'Java', level: 95, category: 'Backend', icon: '☕' }
  ]);
  
  selectedCategory = signal('all');
  
  filteredSkills = signal(this.skills());
  
  filterByCategory(category: string) {
    this.selectedCategory.set(category);
    if (category === 'all') {
      this.filteredSkills.set(this.skills());
    } else {
      this.filteredSkills.set(
        this.skills().filter(skill => skill.category === category)
      );
    }
  }
  
  categories = ['all', 'Frontend', 'Backend', 'Cloud'];
}