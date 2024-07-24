import { Component } from '@angular/core';
import { NgFor, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = new Map<string, boolean>([
    ['task1', true],
    ['task2', true],
    ['task3', false],
  ]);
}
