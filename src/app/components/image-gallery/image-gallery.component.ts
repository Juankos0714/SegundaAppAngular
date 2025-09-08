import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = signal<GalleryImage[]>([
    {
      id: 1,
      url: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Mobile Apps',
      description: 'Aplicaciones móviles'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Backend APIs',
      description: 'Servicios escalables'
    }
  ]);
  
  selectedImage = signal<GalleryImage | null>(null);
  
  openImage(image: GalleryImage) {
    this.selectedImage.set(image);
  }
  
  closeModal() {
    this.selectedImage.set(null);
  }
}