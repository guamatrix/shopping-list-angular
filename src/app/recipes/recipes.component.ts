import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from './recipe.model';
import { ReceipesServices } from './recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
  // selectedRecipe: number;
  recipes: Recipe[];
  suscriptionRecipes: Subscription;
  // suscriptionRecipe: Subscription;

  constructor(private recipesService: ReceipesServices) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.suscriptionRecipes = this.recipesService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
    // this.recipesService.recipeSelect.subscribe(
    //   (index: number) => {
    //     this.selectedRecipe = index;
    //   }
    // );
  }

  // onSelectRecipe(index: number) {
  //   this.selectedRecipe = index;
  // }

  ngOnDestroy() {
    // this.suscriptionRecipe.unsubscribe();
    this.suscriptionRecipes.unsubscribe();
  }
}
