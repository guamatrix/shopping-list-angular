import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResponseService } from '../shared/response.service';

const route: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
