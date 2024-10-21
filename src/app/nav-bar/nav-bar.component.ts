import { userService } from './../userService';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  userLogin: string = '';
  constructor(private router: Router, private userService: userService) {
    this.userService.getUser().subscribe((data) => {
      console.log(data.name);
      this.userLogin = data.name;
    });
  }

  logOutUser() {
    this.router.navigate(['/login-page']);
    localStorage.removeItem('logged');
  }
}
