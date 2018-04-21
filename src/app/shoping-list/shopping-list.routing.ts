import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopingListComponent } from './shoping-list.component';

const routes: Routes = [
  { path: '', component: ShopingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingListRounting {}
