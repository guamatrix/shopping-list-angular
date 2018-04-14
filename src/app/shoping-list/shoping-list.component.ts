import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  selectedIngredient = -1;
  suscriptionIngredients: Subscription;
  suscriptionSelected: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.suscriptionIngredients = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.slService.getIngredients();
      }
    );
    this.suscriptionSelected = this.slService.ingredientSelected.subscribe(
      (index: number) => { this.selectedIngredient = index; }
    );
  }

  onSelectIngredient(index: number) {
    this.selectedIngredient = index;
    this.slService.selectIngredient(index);
  }

  ngOnDestroy() {
    this.suscriptionIngredients.unsubscribe();
    this.suscriptionSelected.unsubscribe();
  }
}
