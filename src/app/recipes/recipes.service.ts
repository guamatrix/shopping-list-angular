import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { StateRecipe } from './store/recipe.reducer';
import { selectedRecipe, selectRecipes } from './store/recipes.selectors';
import * as RecipesActions from './store/recipe.actions';

@Injectable()
export class ReceipesServices {

  constructor(private slService: ShoppingListService,
    private store: Store<StateRecipe>) {}

  getRecipes() {
    return this.store.pipe(select(selectRecipes));
  }

  getRecipe() {
    return this.store.pipe(select(selectedRecipe));
  }

  addRecipe(recipe: Recipe) {
    this.store.dispatch(new RecipesActions.AddRecipe(recipe));
  }

  onSelectRecipe(index) {
    this.store.dispatch(new RecipesActions.SelectRecipe(index));
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredientFromRecipes(ingredients);
  }

  deleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe());
  }

  upDateRecipe(recipe: Recipe) {
    this.store.dispatch(new RecipesActions.UpdateRecipe(recipe));
  }

  fetchServiceRecipes(recipes: Recipe[]) {
    // this.recipes = recipes;
    // this.recipeChanged.next(this.recipes.slice());
  }
}
