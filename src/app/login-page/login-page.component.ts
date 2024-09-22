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
    console.log(isUserCorrect(this.username, this.password));
    if (isUserCorrect(this.username, this.password)) {
      localStorage.setItem('logged', 'true');
      this.router.navigate(['/task-table']);
    } else {
      this._snackBar.open('login or password is incorrect', 'OK');
    }
  }
}

function isUserCorrect(username: string, password: string): boolean {
  // try {
  //   const response = await axios.get('./usersdata.json');
  //   const users = response.data;
  //   console.log(users);
  // } catch (error) {
  //   console.error(error);
  // }

  let correct: boolean = false;
  usersdata.users.forEach((user) => {
    if (username === user.login && password === user.password) {
      console.log(user);
      correct = true;
    }
  });
  return correct;
}
