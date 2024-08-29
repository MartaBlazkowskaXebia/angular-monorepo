import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '@angular-monorepo/data-access';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users] Load Users'),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => ({
            type: '[Users API] Load Users Success',
            payload: users,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private usersService: UsersService) {}
}
