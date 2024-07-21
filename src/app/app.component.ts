import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './ui/users/user-list/user-list.component';
import { UserTodosComponent } from './ui/users/user-todos/user-todos.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, UserTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userService = inject(UserService);

  title = 'hands-on-signal';
}
