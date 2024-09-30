import { Component } from '@angular/core';
import { Task } from '../task';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskFormComponent } from '../new-task-form/new-task-form.component';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [NgFor, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css',
})
export class TaskTableComponent {
  name: string = '';
  status: string = '';
  deadline: Date = new Date();

  tasks = getTasks();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NewTaskFormComponent, {
      width: '250px',
      data: {
        taskName: this.name,
        taskStatus: this.status,
        taskDeadline: this.deadline,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      result.taskDeadline.getMilliseconds();
      this.tasks.push(
        new Task(result.taskName, result.taskStatus, result.taskDeadline)
      );
      console.log(result.taskDeadline);
      console.log(result.taskStatus);
    });
  }

  dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day} `;
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  createNewTask() {
    this.tasks.push(new Task('Task', 'To do', new Date(1722958199000)));
  }
}

async function getTasks(): Promise<Array<Task>> {
  let responseFromDB = await fetch(
    'http://localhost:3000/users?id=' + localStorage.getItem('logged')
  );
  let tasksArray: Array<Task> = [];
  let userFromDB = await responseFromDB.json();
  userFromDB.tasks.forEach((task: any) => {
    let parsedTask = new Task(task.name, task.status, new Date(task.deadline));
    tasksArray.push(parsedTask);
  });
  return tasksArray;
}
