import { IUser } from '@angular-monorepo/models';
import { createReducer, on } from '@ngrx/store';
import { loadUsers } from './users.actions';

const initialState = {
  list: [] as IUser[],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state, { payload }) => ({ list: payload }))
);
