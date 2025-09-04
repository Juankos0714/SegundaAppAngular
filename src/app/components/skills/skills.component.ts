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
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = signal<Skill[]>([
    { name: 'Angular', level: 90, category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘' },
    { name: 'React', level: 80, category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', level: 75, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 70, category: 'Backend', icon: '🐍' },
    { name: 'AWS', level: 65, category: 'Cloud', icon: '☁️' }
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