import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';


@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuth().map(
      (isAuth: boolean) => {
        if (!isAuth) {
          this.route.navigate(['login']);
        }
        return isAuth;
      }
    );
  }
}
