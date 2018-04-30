import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State, StateShoppinList } from './shoppin-list.reducer';
import { Ingredient } from '../../shared/ingredient.module';

export const selectState = (state: StateShoppinList) => state.shoppingList;
export const selectAllIngredients = (state: StateShoppinList) => state.shoppingList.ingredients;
export const selectIngredientIndex = (state: StateShoppinList) => state.shoppingList.indexSelected;

// export const selectedIngredient = (state: StateShoppinList) => state.shoppingList.ingredients[state.indexSelected];
// export const  selectedIngredient = (state: StateShoppinList) => {
//   return {
//     ingredient: state.shoppingList.ingredients[state.shoppingList.indexSelected],
//     index: state.shoppingList.indexSelected
//   };
// };

export const  selectedIngredient = createSelector(
  selectState,
  (state: State) => {
    return {
      ingredient: state.ingredients[state.indexSelected],
      index: state.indexSelected
    };
  }
);
