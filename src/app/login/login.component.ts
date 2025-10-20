import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    console.log('Entered username:', this.username);
    console.log('Entered password:', this.password);
    
    if (this.username === 'admin' && this.password === 'password') {
      // Set token in localStorage to simulate successful login
      localStorage.setItem('token', 'demo-auth-token');
      alert('Login successful!');
      // Navigate to home after successful login
      this.router.navigate(['/home']);
    } else {
      alert(`Invalid credentials! 
      Expected: username = 'admin', password = 'password'
      You entered: username = '${this.username}', password = '${this.password}'`);
    }
  }

  logout() {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
