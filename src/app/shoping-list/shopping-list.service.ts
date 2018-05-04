import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as ActionShoppingList from './store/shoppin-list.actions';
import { StateShoppinList } from './store/shoppin-list.reducer';
import { selectAllIngredients, selectedIngredient, selectState } from './store/shopping-list.selectors';

@Injectable()
export class ShoppingListService {

  constructor(private store: Store<StateShoppinList>) {}

  getIngredients() {
    return this.store.pipe(select(selectAllIngredients));
  }

  addIngredient(ingredient: Ingredient) {
    this.store.dispatch(new ActionShoppingList.AddIngredient(ingredient));
  }

  addIngredientFromRecipes(ingredients: Ingredient[]) {
    this.store.dispatch(new ActionShoppingList.AddIngredients(ingredients));
  }

  deleteIngredient() {
    this.store.dispatch(new ActionShoppingList.DeleteIngredient());
  }

  selectIngredient(index: number) {
    this.store.dispatch(new ActionShoppingList.SelectIngredient(index));
  }

  getShoppingList() {
    return this.store.pipe(select(selectState));
  }

  getIngredientSelected() {
    return this.store.pipe(select(selectedIngredient));
  }

  updateIngredient(ingredient: Ingredient) {
    this.store.dispatch(new ActionShoppingList.UpdateIngredient(ingredient));
  }
}
