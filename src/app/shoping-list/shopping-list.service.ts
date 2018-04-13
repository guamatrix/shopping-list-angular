import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 3),
    new Ingredient('Sauce', 2)
  ];

  ingredientsChanged = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(ingredient);
  }

  addIngredientFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
