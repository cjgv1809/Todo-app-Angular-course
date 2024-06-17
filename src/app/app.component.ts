import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angularTestApp'; // property of the component, it can be used in the template file

  tasksList: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);

  // this method is called when the component is initialized (after the constructor)
  ngOnInit(): void {
    this.tasksList = this._tasksService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this._tasksService.addTask(this.newTask.trim());
      this.newTask = '';
      this.tasksList = this._tasksService.getTasks();
    }
  }

  removeTask(index: number) {
    this._tasksService.removeTask(index);
    this.tasksList = this._tasksService.getTasks();
  }
}
