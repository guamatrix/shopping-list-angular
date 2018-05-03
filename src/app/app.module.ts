import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { shoppingListReducer } from './shoping-list/store/shoppin-list.reducer';
import { reducers } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }) : [],
    // StoreRouterConnectingModule
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router',
    // }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
