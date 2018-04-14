import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 3),
    new Ingredient('Sauce', 2)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index): Ingredient {
    return { ...this.ingredients[index] };
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
    this.ingredientSelected.next(null);
  }

  selectIngredient(index: number) {
    this.ingredientSelected.next(index);
  }
}
