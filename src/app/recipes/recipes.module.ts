import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { StartRecipesComponent } from './start-recipes/start-recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes.routing.module';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})

export class RecipesModule {}
