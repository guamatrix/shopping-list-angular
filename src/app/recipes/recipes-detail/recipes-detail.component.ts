import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ReceipesServices } from '../recipes.service';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  detail: Recipe;
  constructor(private recipesService: ReceipesServices,
    private router: Router,
    private routingActive: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routingActive.params.subscribe(
      (params) => { this.detail = this.recipesService.getRecipe(+params.id); }
    );
  }

  onAddIngredient() {
    this.recipesService.addIngredientsToSL(this.detail.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.routingActive });
  }
}
