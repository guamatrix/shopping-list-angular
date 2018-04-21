import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from '../recipes/recipe.model';
import { ReceipesServices } from '../recipes/recipes.service';

const URL = 'https://ng-recipe-book-255e2.firebaseio.com/data.json';

@Injectable()
export class StoreService {
  constructor(private http: Http,
    private recipeService: ReceipesServices) {}

  getStore() {
   this.http.get(URL)
   .map(
     (response: Response) => {
       const recipes: Recipe[] = response.json();
       recipes.map(recipe => {
         if (!recipe.ingredients) {
           recipe.ingredients = [];
         }
       });
       return recipes;
     }
   )
   .subscribe(
     (response: Recipe[]) => {
       this.recipeService.fetchServiceRecipes(response);
     }
   );
  }

  saveStore() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    return this.http.put(URL, recipes);
  }
}
