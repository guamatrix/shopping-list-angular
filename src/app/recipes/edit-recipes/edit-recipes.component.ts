import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {
  isNew = false;
  constructor() { }

  ngOnInit() {
  }

}
