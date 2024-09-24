import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TaskTableComponent } from '../task-table/task-table.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios';
import { __awaiter } from 'tslib';
import * as usersdata from '../../usersdata.json';

@Component({
  selector: 'app-login-page',
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
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private router: Router) {}
  username = '';
  password = '';

  private _snackBar = inject(MatSnackBar);

  onSubmit() {
    try {
      localStorage.setItem(
        'logged',
        getUser(this.username, this.password).toString()
      );
      this.router.navigate(['/task-table']);
    } catch (error) {
      this._snackBar.open('login or password is incorrect', 'OK');
    }
  }
}

function getUser(username: string, password: string): number {
  let foundUser: any = null;
  usersdata.users.forEach((user) => {
    if (username === user.login && password === user.password) {
      foundUser = user.id;
    }
  });
  if (foundUser === null) {
    throw new Error('user not found');
  } else {
    return foundUser;
  }
}
