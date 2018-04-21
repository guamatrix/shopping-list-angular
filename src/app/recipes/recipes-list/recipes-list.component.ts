import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() recipes: Recipe[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogged() {
    return this.authService.isAuth();
  }
}
