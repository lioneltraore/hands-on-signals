import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);
  userService = inject(UserService);
  taskUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

  userTasks = signal<Todo[]>([]);
  taskEffects = effect(() => this.http.get<Todo[]>(this.taskUrl + this.userService.selectedUserID())
  .subscribe(tasks => this.userTasks.set(tasks)));

  markComplete(selectedTask: Todo) {
    this.userTasks.update(tasks => tasks.map(task => ({...task, completed: task.id === selectedTask.id ? true : task.completed})));
  }

}
