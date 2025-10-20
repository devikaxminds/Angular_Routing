import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  name: string = '';
  email: string = '';
  isSaved: boolean = false;
  private originalName: string = '';
  private originalEmail: string = '';

  save() {
    this.isSaved = true;
    this.originalName = this.name;
    this.originalEmail = this.email;
    alert('Profile saved!');
  }

  reset() {
    this.name = this.originalName;
    this.email = this.originalEmail;
    this.isSaved = true;
  }

  hasUnsavedChanges(): boolean {
    return !this.isSaved && (
      this.name.trim() !== this.originalName.trim() || 
      this.email.trim() !== this.originalEmail.trim()
    );
  }
}
