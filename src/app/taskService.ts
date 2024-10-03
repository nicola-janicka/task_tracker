import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTasks2(): Observable<Task[]> {
    return this.http.get('http://localhost:3000/users?id=0')
      .pipe(
        map((data: any) => this.getTasksFromResponse(data)));
  }

  private getTasksFromResponse(data: any) {
    return data.flatMap((person: any) => this.getTasksFromPerson(person));
  }

  private getTasksFromPerson(person: any) {
    return person.tasks.map((task: any) => this.createNewTask(task));
  }

  private createNewTask(task: any) {
    return new Task(task.name, task.status, new Date(task.deadline));
  }
}
