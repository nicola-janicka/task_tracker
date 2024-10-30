import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { userService } from '../userService';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    MatInput,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  constructor(private router: Router, private userService: userService) {}
  name = '';
  username = '';
  password = '';

  submitSignUpForm() {
    this.userService
      .addNewUser(this.name, this.username, this.password)
      .subscribe((response) => {
        console.log(response);
      });
  }

  goBackToLoginPage() {
    this.router.navigate(['/login-page']);
  }
}
