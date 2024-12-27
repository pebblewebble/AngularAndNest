import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as fs from 'fs';
export interface Tasks {
  id: number;
  name: string;
  completed: boolean;
}
@Injectable()
export class AppService {
  private tasks: Array<Tasks>;
  constructor() {
    this.tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
  }
  getTasks(): Tasks[] {
    this.tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    return this.tasks;
  }
  createTask(name: string): Tasks[] {
    const task = { id: this.tasks.length + 1, name, completed: false };
    this.tasks = [...this.tasks, { ...task}];
    fs.writeFileSync('tasks.json', JSON.stringify(this.tasks));
    return this.tasks;
  }
  deleteTask(id: number): Tasks[] {
    Logger.log(id)
    let index = -1;
    for (let i = 0; i < this.tasks.length; i++) {
      Logger.log(this.tasks[i].id,id)
      if (this.tasks[i].id == id) {
        index = i;
        break; 
      }
    }
    Logger.log(index)
    this.tasks.splice(index,1);
    fs.writeFileSync('tasks.json', JSON.stringify(this.tasks));
    return this.tasks;
  }
}