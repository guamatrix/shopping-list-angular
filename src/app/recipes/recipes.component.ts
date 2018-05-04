import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Recipe } from './recipe.model';
import { ReceipesServices } from './recipes.service';
import { Store } from '@ngrx/store';
import { StateRecipe } from './store/recipe.reducer';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit  {
  recipes: Recipe[];
  suscriptionRecipes: Subscription;

  constructor(private recipesService: ReceipesServices) { }

  ngOnInit() {
    this.suscriptionRecipes = this.recipesService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }
}
