import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = signal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  
  onSubmit() {
    this.isSubmitting.set(true);
    
    // Simulación de envío
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.formData.set({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 3000);
    }, 1500);
  }
  
  updateField(field: string, value: string) {
    this.formData.update(data => ({
      ...data,
      [field]: value
    }));
  }
}