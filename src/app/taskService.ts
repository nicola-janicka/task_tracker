import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getTasks2() {
    return this.http.get('http://localhost:3000/users?id=');
  }
}
