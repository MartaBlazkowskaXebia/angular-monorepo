import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { apiInterceptor } from '@angular-monorepo/data-access';
import {
  counterReducer,
  UsersEffects,
  usersReducer,
} from '@angular-monorepo/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    provideStore({
      counter: counterReducer,
      users: usersReducer,
    }),
    provideEffects(UsersEffects),
    provideStoreDevtools({
      maxAge: 25,
    }),
  ],
};
