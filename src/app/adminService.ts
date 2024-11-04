import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class adminService {
  constructor(private http: HttpClient) {}

  authorizeAdmin(login: string, password: string): unknown {
    let adminid: unknown = '';
    this.http
      .get('http://localhost:3000/admin_users')
      .pipe(map((data: any) => console.log(data)));

    return adminid;
  }

  getAdmin(): Observable<unknown> {
    return this.http.get('http://localhost:3000/admin_users');
  }
}
