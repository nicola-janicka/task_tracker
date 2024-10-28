import { TasksComponent } from './tasks/tasks.component';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

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
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_tracker';
  showNavBar = false;

  constructor(private router: Router) {
    if (localStorage.getItem('logged') === null) {
      this.router.navigate(['/login-page']);
      console.log('works');
    } else {
      this.router.navigate(['/task-table']);
    }
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (value.url === '/login-page' || '/register-page') {
          this.showNavBar = false;
        } else {
          this.showNavBar = true;
        }
      }
    });
  }
}
