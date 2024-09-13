import { Routes } from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: 'task-table', component: TaskTableComponent },
  { path: 'login-page', component: LoginPageComponent },
];