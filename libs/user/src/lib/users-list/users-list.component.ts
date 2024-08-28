import {
  Component,
  computed,
  effect,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '@angular-monorepo/models';
import { UsersService } from '@angular-monorepo/data-access';
import { HighlightDirective } from '@angular-monorepo/directives';

@Component({
  selector: 'lib-users-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor(private usersService: UsersService) {
    effect(() => {
      console.log(
        `The current count is: ${this.count()} ${this.doubleCount()}`
      );
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((res) => (this.users = res));
  }

  handleChangeCount(val: number) {
    this.count.update((value) => value + val);
  }
}
