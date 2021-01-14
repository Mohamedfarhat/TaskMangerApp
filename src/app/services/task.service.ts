import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task> = [
    /*{
      title: "title 1",
      description: "description 1"
    },
    {
      title: "data 2",
      description: "description 2"
    }*/
  ];

  constructor() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks)
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    else
      this.tasks = [];
  }

  findTask(id): Task {
    return this.tasks[id];
  }

  addtask(task) {
    this.tasks.push(task);
    this.saveTolocalStorage();
  }
  addTask(title, description) {
    this.tasks.push(
      {
        title,
        description
      }
    );
    this.saveTolocalStorage();
  }

  editTask(id, data) {
    this.tasks[id] = data;
    this.saveTolocalStorage();
  }
  deleteTask(id) {
    this.tasks.splice(id, 1);
    this.saveTolocalStorage();
  }


  saveTolocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
