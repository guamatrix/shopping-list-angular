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
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    RountingModule,
    BrowserModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    BrowserModule,
    SharedModule,
    HeaderComponent,
    RountingModule,
    AuthModule
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
