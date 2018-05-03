import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ReceipesServices } from '../recipes.service';
import { Ingredient } from '../../shared/ingredient.module';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, OnDestroy {
  detail: Recipe;
  indexRecipe: number;
  isLogged: boolean;
  subscription: Subscription[] = [];
  constructor(private recipesService: ReceipesServices,
    private router: Router,
    private routingActive: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.routingActive.params.subscribe(
      (params) => {
        this.indexRecipe = +params.id;
        this.recipesService.onSelectRecipe(this.indexRecipe);
        this.subscription.push(this.recipesService.getRecipe().subscribe(
          (state: { recipe: Recipe, index: number }) => {
            this.detail = state.recipe;
          }
        ));
      }
    );

    this.subscription.push(this.authService.isAuth().subscribe(
      (isAuth: boolean) => {
        console.log(isAuth);
        this.isLogged = isAuth;
      }
    ));
  }

  onAddIngredient() {
    this.recipesService.addIngredientsToSL(this.detail.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.routingActive });
  }

  onDelete() {
    this.recipesService.deleteRecipe();
    this.router.navigate(['../'], { relativeTo: this.routingActive });
  }

  ngOnDestroy() {
    this.subscription.map(sub => sub.unsubscribe());
  }
}
