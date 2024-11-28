import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks2(): Observable<Task[]> {
    return this.http
      .get(
        'http://localhost:3001/tasks?userID=' + localStorage.getItem('logged')
      )
      .pipe(map((data: any) => this.getTasksFromResponse(data)));
  }

  private getTasksFromResponse(data: any) {
    return data.map((task: any) => this.createNewTask(task));
  }

  private createNewTask(task: any) {
    return new Task(
      task.id,
      task.userID,
      task.name,
      task.status,
      new Date(task.deadline)
    );
  }

  // USUWANIE ZADAŃ:

  deleteTask(taskID: number): Observable<any> {
    return this.http.delete('http://localhost:3000/tasks/' + taskID);
  }

  addTask(name: string, status: string, deadline: number): Observable<any> {
    let task = {
      name: name,
      status: status,
      deadline: deadline,
      userID: localStorage.getItem('logged'),
    };
    let jsonTask = JSON.stringify(task);
    return this.http.post('http://localhost:3000/tasks', jsonTask);
  }

  editTask(editedTask: Task): Observable<any> {
    return this.http.put(
      'http://localhost:3000/tasks/' + editedTask.id,
      editedTask.getJSONString()
    );
  }
}
