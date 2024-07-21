import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [],
  templateUrl: './user-todos.component.html',
  styleUrl: './user-todos.component.scss'
})
export class UserTodosComponent {

  todoService = inject(TodoService);
  userTasks = this.todoService.userTasks;

  completedCount = computed(() => this.userTasks().filter(task => task.completed).length);
  pageTitle = computed(() => `User Tasks - ${this.completedCount()} completed`);

  markComplete(task: Todo) {
    this.todoService.markComplete(task);
  }

}
