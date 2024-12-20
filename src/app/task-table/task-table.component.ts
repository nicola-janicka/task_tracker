import { TaskService } from './../taskService';
import { Component } from '@angular/core';
import { Task } from '../task';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskFormComponent } from '../new-task-form/new-task-form.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { EditTaskFormComponent } from '../edit-task-form/edit-task-form.component';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    NgFor,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css',
})
export class TaskTableComponent {
  name: string = '';
  status: string = '';
  deadline: Date = new Date();

  tasks: Task[] = [];
  // taskPromise = getTasks();

  // taskObservable = from(this.taskPromise);

  constructor(private dialog: MatDialog, private taskService: TaskService) {
    this.taskService.getTasks2().subscribe((value: any) => {
      this.tasks = value;
      console.log('Tasks:', value);
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewTaskFormComponent, {
      width: '250px',
      data: {
        taskName: this.name,
        taskStatus: this.status,
        taskDeadline: this.deadline,
      },
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        result.taskDeadline.getMilliseconds();
        this.taskService
          .addTask(result.taskName, result.taskStatus, result.taskDeadline)
          .subscribe((response) => {});
        this.taskService.getTasks2().subscribe((value: any) => {
          this.tasks = value;
          console.log('Tasks:', value);
        });
      }

      // this.tasks.push(
      //   new Task(
      //     result.id,
      //     result.taskName,
      //     result.taskStatus,
      //     result.taskDeadline
      //   )
      // );
    );
  }

  dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day} `;
  }

  deleteTask(id: number, i: number) {
    this.taskService.deleteTask(id).subscribe((data) => {
      console.log('success');
    });
    this.tasks.splice(i, 1);
  }

  createNewTask() {
    // this.tasks.push(new Task('Task', 'To do', new Date(1722958199000)));
    console.log('Hello');
  }

  openEditDialog(task: Task): void {
    let dialogRef = this.dialog.open(EditTaskFormComponent, {
      width: '250px',
      data: {
        taskName: task.name,
        taskStatus: task.status,
        taskDeadline: task.deadline,
      },
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        (task.name = result.taskName),
          (task.status = result.taskStatus),
          (task.deadline = result.taskDeadline);

        this.taskService.editTask(task).subscribe((value) => {
          console.log(value);
        });
      }

      // this.tasks.push(
      //   new Task(
      //     result.id,
      //     result.taskName,
      //     result.taskStatus,
      //     result.taskDeadline
      //   )
      // );
    );
  }
}

// ASYNc/AWAIT:
// async function getTasks(): Promise<Array<Task>> {
//   let responseFromDB = await fetch(
//     'http://localhost:3000/users?id=' + localStorage.getItem('logged')
//   ); //spróbować jeszcze z users/, u Marcina działa jak usunie się z db.json contacts
//   let tasksArray: Array<Task> = [];
//   let userFromDB = await responseFromDB.json();
//   console.log(userFromDB);
//   userFromDB[0].tasks.forEach((task: any) => {
//     let parsedTask = new Task(task.name, task.status, new Date(task.deadline));
//     tasksArray.push(parsedTask);
//   });
//   return tasksArray;
// }
