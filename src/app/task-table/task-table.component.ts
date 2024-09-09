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

  tasks = [
    new Task('Task1', 'To do', new Date(1722448188000)),
    new Task('Task2', 'In progress', new Date(1722446188000)),
    new Task('Task3', 'Done', new Date(1722445188000)),
  ];

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
    });
  }

  dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0');

    // Return the formatted date string
    return `${year}-${month}-${day} `;
  }

  // unixToDate(unixTimestamp: number): string {
  //   // Create a new Date object using the Unix timestamp multiplied by 1000 (to convert from seconds to milliseconds)
  //   const date = new Date(unixTimestamp * 1000);

  //   // Extract date components and format as desired
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
  //   const day = date.getDate().toString().padStart(2, '0');

  //   // Return the formatted date string
  //   return `${year}-${month}-${day} `;
  // }
  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  createNewTask() {
    this.tasks.push(new Task('Task', 'To do', new Date(1722958199000)));
  }
}
