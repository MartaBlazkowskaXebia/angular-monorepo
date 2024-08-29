import { IUser } from '@angular-monorepo/models';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[Users API] Load Users Success',
  props<{ payload: IUser[] }>()
);
