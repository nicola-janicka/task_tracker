import { TasksComponent } from './tasks/tasks.component';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TasksComponent,
    TaskTableComponent,
    LoginPageComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_tracker';

  constructor(private router: Router) {
    if (localStorage.getItem('logged') === null) {
      this.router.navigate(['/login-page']);
      console.log('works');
    }
  }
}
