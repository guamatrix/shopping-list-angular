import { createSelector } from '@ngrx/store';

import { State, StateAuth } from './auth.reducer';
import { User } from '../../shared/user.model';

export const selectState = ((state: StateAuth) => {
  return state.auth.user;
});

export const selectToken = createSelector(
  selectState,
  (user: User) => {
    return user.token;
  }
);

export const selectIsAuth = createSelector(
  selectState,
  (user: User) => {
    console.log(user);
    return user.isLoged;
  }
);
