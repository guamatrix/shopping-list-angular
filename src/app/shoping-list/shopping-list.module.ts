import { NgModule } from '@angular/core';

import { ShopingListComponent } from './shoping-list.component';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRounting } from './shopping-list.routing';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    ShoppingListRounting,
    SharedModule
  ]
})

export class ShoppingListModule {}
