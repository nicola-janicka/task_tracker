import { Routes } from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';

export const routes: Routes = [
  { path: 'task-table', component: TaskTableComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'admin', component: AdminLoginPageComponent },
];
