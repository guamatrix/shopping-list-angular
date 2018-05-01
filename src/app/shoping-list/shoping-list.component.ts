import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { State, StateShoppinList } from './store/shoppin-list.reducer';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  selectedIngredient: number;
  suscriptionIngredients: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.suscriptionIngredients = this.slService.getShoppingList()
      .subscribe(
        (state: State) => {
          this.ingredients = state.ingredients;
          this.selectedIngredient = state.indexSelected;
        }
      );
  }

  onSelectIngredient(index: number) {
    this.slService.selectIngredient(index);
  }

  ngOnDestroy() {
    this.slService.selectIngredient(-1);
    this.suscriptionIngredients.unsubscribe();
  }
}
