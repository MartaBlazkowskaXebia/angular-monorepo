import { ITodo } from '@angular-monorepo/models';
import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add todo', props<ITodo>());
export const removeTodo = createAction(
  '[Todo] Remove todo',
  props<{ id: string }>()
);
