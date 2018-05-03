import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { RecipesComponent } from './recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { StartRecipesComponent } from './start-recipes/start-recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes.routing.module';
import { SharedModule } from '../shared/shared.module';
import { recipeReducer } from './store/recipe.reducer';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    EditRecipesComponent,
    StartRecipesComponent
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipesList', recipeReducer)
  ]
})

export class RecipesModule {}
