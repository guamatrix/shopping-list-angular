import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';


@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogged = this.authService.isAuth();
    if (!isLogged) {
      this.route.navigate(['home']);
    }
    return isLogged;
  }
}
