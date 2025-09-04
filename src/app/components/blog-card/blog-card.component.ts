import { Component, Input, signal } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: Date;
  readTime: number;
  tags: string[];
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
  
  formattedDate = signal('');
  
  ngOnInit() {
    this.formattedDate.set(this.post.date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }
}