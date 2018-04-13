import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shoping-list/shopping-list.service';

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

  recipeChanged = new EventEmitter<Recipe>();
  recipeSelect = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.emit(recipe);
  }

  onSelectRecipe(recipe) {
    this.recipeSelect.emit(recipe);
  }

  getRecipe(index: number) {
    return {...this.recipes[index] };
  }


  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredientFromRecipes(ingredients);
  }
}
