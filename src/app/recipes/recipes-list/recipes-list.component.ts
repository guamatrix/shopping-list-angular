import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  @Input() recipes: Recipe[];
  isLogged: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.isAuth().subscribe(
      (isAuth: boolean) => this.isLogged = isAuth
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

