import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ShoppingListModule } from './shoping-list/shopping-list.module';
// import { LoginComponent } from './auth/login/login.component';

const recipes = 'app/recipes/recipes.module#RecipesModule';

const router: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'sigin', loadChildren: 'app/auth/auth.module#AuthModule' },
  // { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: 'app/shoping-list/shopping-list.module#ShoppingListModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
// preloading can be pass a custom function that implements PreloadingStrategy that
// can check if the route has a preload in true
// example { path: 'xxxx', loadchilren: 'xxxx', data: { preload: true }}
export class RountingModule {}

