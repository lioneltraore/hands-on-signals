import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import {toSignal} from "@angular/core/rxjs-interop";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  userUrl = 'https://jsonplaceholder.typicode.com/users';

  private users$ = this.http.get<User[]>(this.userUrl);

  users = toSignal(this.users$, { initialValue: [] as User[] });
  selectedUserID = signal(0);

  setSelectedUser(id: number) {
    this.selectedUserID.set(id);
  }

}

