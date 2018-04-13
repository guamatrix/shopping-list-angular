import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { ReceipesServices } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ReceipesServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[];
  constructor(private recipesService: ReceipesServices) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipeChanged.subscribe(
      (recipe: Recipe) => {
        this.recipes.push(recipe);
      }
    );
    this.recipesService.recipeSelect.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
