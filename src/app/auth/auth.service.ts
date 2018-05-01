import { Store, select } from '@ngrx/store';
import * as firebase from 'firebase';

import { ResponseService } from '../shared/response.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StateAuth, State } from './store/auth.reducer';
import * as AuthActions from './store/auth.actions';
import { User } from '../shared/user.model';
import { selectToken, selectIsAuth } from './store/auth.selectors';

@Injectable()
export class AuthService {

  constructor(private responseService: ResponseService,
    private route: Router,
    private store: Store<StateAuth>) {}

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response: Response) => {
          console.log(response);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                const payload = new User('test', token);
                this.store.dispatch(new AuthActions.Login(payload));
                this.responseService.sendResponse(true, '');
                this.route.navigate(['recipes']);
              }
            )
            .catch(
              error => {
                console.log(error);
                this.store.dispatch(new AuthActions.Logout());
                this.responseService.sendResponse(false, error.message);
              }
            );
        }
      ).catch(
        error => {
          console.log(error);
          this.store.dispatch(new AuthActions.Logout());
          this.responseService.sendResponse(false, error.message);
        }
      );
  }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response: Response) => {
          console.log(response);
          this.responseService.sendResponse(true, 'User Created');
          this.route.navigate(['/login']);
        }
      ).catch(error => {
          console.log(error);
          this.responseService.sendResponse(false, error.message);
        }
      );
  }

  getToken() {
    // return this.store.pipe(select(selectToken));
  }

  isAuth() {
    return this.store.pipe(select(selectIsAuth));
  }

  logOff() {
    firebase.auth().signOut()
      .then(() => {
        this.store.dispatch(new AuthActions.Logout());
        this.route.navigate(['home']);
      })
      .catch(error => {
        console.log(error);
        this.responseService.sendResponse(false, error.message);
      });
  }
}
