import { Action } from '@ngrx/store';

import { User } from '../../shared/user.model';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: User) {}
}

export type AuthActions = Login | Logout | Signup;
