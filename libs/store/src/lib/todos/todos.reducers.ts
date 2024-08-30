import { ITodo } from '@angular-monorepo/models';
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todos.actions';

const initialState = {
  list: [] as ITodo[],
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, todo) => ({ list: [...state.list, todo] })),
  on(removeTodo, (state, payload) => {
    return { list: state.list.filter((todo) => todo.id !== payload.id) };
  })
);
