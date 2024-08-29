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
import { Store } from '@ngrx/store';
import { IUser } from '@angular-monorepo/models';
import { UsersService } from '@angular-monorepo/data-access';
import { HighlightDirective } from '@angular-monorepo/directives';
import { increment, decrement, reset } from '@angular-monorepo/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-users-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  // users: IUser[] = [];
  users$!: Observable<IUser[]>;
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  stateCount$!: Observable<number>;

  constructor(
    private usersService: UsersService,
    private store: Store<{ counter: number; users: { list: IUser[] } }>
  ) {
    effect(() => {
      console.log(
        `The current count is: ${this.count()} ${this.doubleCount()}`
      );
    });

    this.stateCount$ = store.select('counter');
    this.users$ = store.select((state) => state.users.list);
  }

  ngOnInit(): void {
    // this.getAllUsers();
    this.store.dispatch({ type: '[Users] Load Users' });
  }

  // getAllUsers() {
  //   this.usersService.getUsers().subscribe((res) => (this.users$ = res));
  // }

  handleChangeCount(val: number) {
    this.count.update((value) => value + val);
  }

  increament() {
    this.store.dispatch(increment());
  }

  decreament() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
