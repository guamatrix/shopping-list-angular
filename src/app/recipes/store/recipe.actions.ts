import { Action } from '@ngrx/store';

import { Recipe } from '../recipe.model';

export const SELECT_RECIPE = 'SELECT_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const INIT_RECIPE = 'INIT_RECIPE';

export class SelectRecipe implements Action {
  readonly type = SELECT_RECIPE;
  constructor(public payload: number) {}
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: Recipe) {}
}

export class InitRecipe implements Action {
  readonly type = INIT_RECIPE;
}

export type RecipeActions = SelectRecipe | AddRecipe | DeleteRecipe | UpdateRecipe | InitRecipe;
