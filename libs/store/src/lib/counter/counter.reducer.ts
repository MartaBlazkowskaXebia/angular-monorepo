import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);
