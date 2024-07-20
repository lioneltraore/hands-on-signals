import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userService = inject(UserService);

  users = this.userService.users;
  selectedUserID = this.userService.selectedUserID;

  onSelectedUser(userID: number) {
    this.userService.setSelectedUser(userID);

    console.log(`selected = ${userID} - current = ${this.selectedUserID()}`)
  }

}
