import { TodoListComponent } from '@angular-monorepo/todo';
import { UsersListComponent } from '@angular-monorepo/user';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: 'todo',
    component: TodoListComponent,
  },
];
