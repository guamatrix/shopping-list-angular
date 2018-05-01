import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer)
  ]
})

export class AuthModule {}

