import { ActionReducerMap } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState } from '@ngrx/router-store';
import { StateShoppinList, shoppingListReducer } from '../shoping-list/store/shoppin-list.reducer';

export interface AppState {
  // shoppingList: StateShoppinList;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  // shoppingList: shoppingListReducer,
  router: routerReducer
};
