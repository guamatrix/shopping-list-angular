import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { EditRecipesComponent } from './recipes/edit-recipes/edit-recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { StartRecipesComponent } from './recipes/start-recipes/start-recipes.component';

const router: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: StartRecipesComponent, pathMatch: 'full' },
    { path: 'new', component: EditRecipesComponent },
    { path: ':id', component: RecipesDetailComponent },
    { path: ':id/edit', component: EditRecipesComponent }
  ] },
  { path: 'shopping-list', component: ShopingListComponent },
  { path: '**', redirectTo: '/recipes' }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class RountingModule {}

