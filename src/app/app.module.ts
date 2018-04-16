import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { HighLightDirective } from './shared/higlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoping-list/shopping-list.service';
import { RountingModule } from './routing.module';
import { EditRecipesComponent } from './recipes/edit-recipes/edit-recipes.component';
import { StartRecipesComponent } from './recipes/start-recipes/start-recipes.component';
import { ReceipesServices } from './recipes/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    HighLightDirective,
    UnlessDirective,
    DropdownDirective,
    EditRecipesComponent,
    StartRecipesComponent
  ],
  imports: [
    BrowserModule,
    RountingModule,
    ReactiveFormsModule

  ],
  providers: [ShoppingListService, ReceipesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
