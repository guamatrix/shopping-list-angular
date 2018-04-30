import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ShopingListComponent } from './shoping-list.component';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRounting } from './shopping-list.routing';
import { shoppingListReducer } from './store/shoppin-list.reducer';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    ShoppingListRounting,
    SharedModule,
    StoreModule.forFeature('shoppingList', shoppingListReducer)
  ]
})

export class ShoppingListModule {}
