import { Ingredient } from '../../shared/ingredient.module';
import * as ShoppingListActions from './shoppin-list.actions';
import { AppState } from '../../store/app.reducer';

export interface State {
  ingredients: Ingredient[];
  indexSelected: number;
}

export interface StateShoppinList {
  shoppingList: State;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 3),
    new Ingredient('Sauce', 2)
  ],
  indexSelected: -1
};



export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.SELECT_INGREDIENT:
      console.log(state);
      return {
        ...state,
        indexSelected: action.payload
      };

    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
    };

    case ShoppingListActions.DELETE_INGREDIENT:
      const ingredientsDeleted = [...state.ingredients];
      ingredientsDeleted.splice(state.indexSelected, 1);
      return {
        ...state,
        ingredients: ingredientsDeleted,
        indexSelected: -1
      };

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredientsUpdated = [...state.ingredients];
      ingredientsUpdated[state.indexSelected] = action.payload;
      return {
        ...state,
        ingredients: ingredientsUpdated,
        indexSelected: -1
      };

    default:
      return state;
  }
}
