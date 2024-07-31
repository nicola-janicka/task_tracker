import { TasksComponent } from './tasks/tasks.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksComponent, TaskTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_tracker';
}
