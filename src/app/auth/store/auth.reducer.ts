import * as ActionsAuth from './auth.actions';
import { User } from '../../shared/user.model';

export interface State {
  user: User;
}

export interface StateAuth {
  auth: State;
}

const initialState: State = {
  user: new User(null, null, false)
};

export function authReducer(state = initialState, action: ActionsAuth.AuthActions) {
  switch (action.type) {
    case ActionsAuth.SIGNUP:
    case ActionsAuth.LOGIN:
      return {
        ...state,
        user: new User(action.payload.user, action.payload.token, true)
      };

    case ActionsAuth.LOGOUT:
    default:
      return state;
  }
}
