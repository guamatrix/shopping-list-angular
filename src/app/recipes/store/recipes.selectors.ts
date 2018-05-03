import { createSelector } from '@ngrx/store';

import { StateRecipe, State } from './recipe.reducer';

export const selectState = (state: StateRecipe) => state.recipesList;
export const selectRecipes = (state: StateRecipe) => state.recipesList.recipes;
export const selectedRecipeIndex = (state: StateRecipe) => state.recipesList.recipeSelected;

export const selectedRecipe = createSelector(
  selectState,
  (state: State) => {
    return {
      recipe: state.recipes[state.recipeSelected],
      index: state.recipeSelected
    };
  }
);
