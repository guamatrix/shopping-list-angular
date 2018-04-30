import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RountingModule } from '../routing.module';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { ReceipesServices } from '../recipes/recipes.service';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
import { ResponseService } from '../shared/response.service';
import { StoreService } from '../shared/store.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    RountingModule,
    BrowserModule,
    SharedModule,
  ],
  exports: [
    BrowserModule,
    SharedModule,
    HeaderComponent,
    RountingModule,
  ],
  providers: [
    ShoppingListService,
    ReceipesServices,
    StoreService,
    AuthService,
    ResponseService
  ],
})

export class CoreModule {}
