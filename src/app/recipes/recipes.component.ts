import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe.model';
import { ReceipesServices } from './recipes.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { StateRecipe } from './store/recipe.reducer';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    // this.suscriptionRecipes.unsubscribe();
  }
}
