import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskTableComponent } from '../task-table/task-table.component';
import { adminService } from '../adminService';

@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    TaskTableComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatInput,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css',
})
export class AdminLoginPageComponent {
  constructor(private adminService: adminService) {}

  username = '';
  password = '';

  onSubmit() {
    this.adminService.authorizeAdmin(this.username, this.password);
  }
}
