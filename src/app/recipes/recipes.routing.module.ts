import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { StartRecipesComponent } from './start-recipes/start-recipes.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RountingModule } from '../routing.module';
import { AuthGuard } from '../auth/auth.guard.service';

const routes: Routes = [
  { path: '', component: RecipesComponent, children:
    [
      { path: '', component: StartRecipesComponent, pathMatch: 'full' },
      { path: 'new', component: EditRecipesComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: EditRecipesComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {}
