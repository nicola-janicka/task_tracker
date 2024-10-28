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

  async onSubmit() {
    try {
      const userID = await getUser(this.username, this.password);
      localStorage.setItem('logged', userID.toString());
      this.router.navigate(['/task-table']);
    } catch (error) {
      this._snackBar.open('login or password is incorrect', 'OK');
    }
  }

  openSignUpForm() {
    this.router.navigate(['/register-page']);
  }
}

async function getUser(username: string, password: string): Promise<number> {
  const responseFromDB = await fetch('http://localhost:3000/users', {
    method: 'GET',
  });
  const jsonResponse = await responseFromDB.json();
  let foundUser: any = null;
  jsonResponse.forEach((user: any) => {
    if (username === user.login && password === user.password) {
      foundUser = user.id;
      console.log(foundUser);
    }
  });

  if (foundUser === null) {
    throw new Error('user not found');
  } else {
    return foundUser;
  }
}
