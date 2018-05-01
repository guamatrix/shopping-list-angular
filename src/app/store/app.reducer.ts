import { ActionReducerMap } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState } from '@ngrx/router-store';
import { StateShoppinList, shoppingListReducer } from '../shoping-list/store/shoppin-list.reducer';
import { authReducer, StateAuth } from '../auth/store/auth.reducer';

export interface AppState {
  // shoppingList: StateShoppinList;
  router: RouterReducerState;
  // auth: StateAuth;
}

export const reducers: ActionReducerMap<AppState> = {
  // shoppingList: shoppingListReducer,
  // auth: authReducer,
  router: routerReducer
};
