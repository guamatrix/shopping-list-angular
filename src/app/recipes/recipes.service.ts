import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ReceipesServices {
  private recipes: Recipe[] = [
    new Recipe(
      'Arroz con Papa',
      'Comida endogena',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Arroz', 10),
        new Ingredient('Papa', 10),
        new Ingredient('Tajada', 10),
      ]
    ),
    new Recipe(
      'Pabellon',
      'Comida criolla',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Arroz', 10),
        new Ingredient('Carne Mechada', 30),
        new Ingredient('Tajada', 3),
      ]
    ),
  ];

  recipeChanged = new Subject<Recipe[]>();
  recipeSelect = new Subject<number>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return { ...this.recipes[index] };
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  onSelectRecipe(index) {
    this.recipeSelect.next(index);
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredientFromRecipes(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  upDateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  fetchServiceRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
