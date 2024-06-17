import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private localStorageKey = 'tasks';

  getTasks(): string[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: string): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  removeTask(index: number): void {
    const tasks = this.getTasks();
    if (index > -1 && index < tasks.length) {
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }

  private saveTasks(tasks: string[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}
