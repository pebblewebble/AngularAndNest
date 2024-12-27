import { Component, NgModule } from '@angular/core';
import { TaskService } from './tasks.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface Task {
  id: number;
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  imports: [NgFor, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[];
  task: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private taskService: TaskService,
  ) {
    this.tasks = [];
    this.task = '';
  }
  title = 'task-ui';
  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      console.log('Tasks loaded:', data);
      this.tasks = data as Task[];
    });
  }

  addTask(task: string) {
    if (task.trim().length === 0) return;
    
    this.taskService.addTask(task).subscribe((data) => {
      console.log('Task added:', data);
      this.tasks = data as Task[]; // Update tasks array with server response
      this.task = '';
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((data) => {
      console.log('Task deleted:', data, id);
      this.tasks = data as Task[]; // Update tasks array with server response
    });
  } 
}