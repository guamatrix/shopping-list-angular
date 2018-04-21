import * as firebase from 'firebase';
import { ResponseService } from '../shared/response.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private responseService: ResponseService,
    private route: Router) {}

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response: Response) => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                this.responseService.sendResponse(true, '');
                this.route.navigate(['recipes']);
              }
            )
            .catch(
              error => {
                console.log(error);
                this.responseService.sendResponse(false, error.message);
              }
            );
        }
      ).catch(
        error => {
          console.log(error);
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
        }
      ).catch(error => {
          console.log(error);
          this.responseService.sendResponse(false, error.message);
        }
      );
  }

  getToken() {
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logOff() {
    firebase.auth().signOut()
      .then(() => {
        this.token = null;
        this.route.navigate(['home']);
      })
      .catch(error => {
        console.log(error);
        this.responseService.sendResponse(false, error.message);
      });
  }
}
