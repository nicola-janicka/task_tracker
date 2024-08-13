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

  tasks = [
    new Task('Task1', 'To do', 1722448188),
    new Task('Task2', 'In progress', 1722446188),
    new Task('Task3', 'Done', 1722445188),
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NewTaskFormComponent, {
      width: '250px',
      data: { taskName: this.name, taskStatus: this.status },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.tasks.push(new Task(result.taskName, result.taskStatus, 1722958199));
    });
  }

  unixToDate(unixTimestamp: number): string {
    // Create a new Date object using the Unix timestamp multiplied by 1000 (to convert from seconds to milliseconds)
    const date = new Date(unixTimestamp * 1000);

    // Extract date components and format as desired
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0');

    // Return the formatted date string
    return `${year}-${month}-${day} `;
  }
  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  createNewTask() {
    this.tasks.push(new Task('Task', 'To do', 1722958199));
  }
}
