import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http
      .get('http://localhost:3000/users/' + localStorage.getItem('logged'))
      .pipe(map((data: any) => data));
  }

  addNewUser(
    inputName: string,
    inputLogin: string,
    inputPassword: string
  ): Observable<any> {
    let newUser = {
      name: inputName,
      login: inputLogin,
      password: inputPassword,
    };

    return this.http.post(
      'http://localhost:3000/users',
      JSON.stringify(newUser)
    );
  }

  // private getIDFromResponse(data: any) {
  //   return data.map((userID: any) => this.createNewUserID());
  // }

  // private createNewUserID(task: any) {
  //   return new userID(user.id, user.login);
  // }
}
