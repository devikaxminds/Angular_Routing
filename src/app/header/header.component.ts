import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'ANGULAR-ROUTING';
  constructor(private router: Router) {}
  goToAbout() {
    this.router.navigate(['/about']);
  }
}
