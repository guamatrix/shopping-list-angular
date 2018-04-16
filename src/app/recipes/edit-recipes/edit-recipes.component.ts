import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReceipesServices } from '../recipes.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.module';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {
  isEdit = false;
  indexEdit: number;
  recipeForm: FormGroup;
  ingredientsInputs: FormArray;

  constructor(private recipeService: ReceipesServices,
    private routingActive: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.routingActive.params.subscribe(
      (params) => {
        this.indexEdit = +params.id;
        this.isEdit = params.id != null;
        this.initForm();
      }
    );
  }

  onCancel() {
    this.router.navigate(['../']);
  }

  onAddIngredient() {
    this.ingredientsInputs.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  private initForm() {
    let name = '';
    let description = '';
    let imgPath = '';
    this.ingredientsInputs = new FormArray([]);
    if (this.isEdit) {
      const recipe = this.recipeService.getRecipe(this.indexEdit);
      name = recipe.name;
      description = recipe.description;
      imgPath = recipe.imgPath;
      recipe.ingredients.map(ingredient => {
        this.ingredientsInputs.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      });
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imgPath: new FormControl(imgPath, Validators.required),
      ingredients: this.ingredientsInputs
    });
    console.log(this.recipeForm);
  }

  showError(key: string): string {
    return 'Error';
  }

  addRecipe(recipe: Recipe) {
    this.recipeService.addRecipe(recipe);
    this.recipeService.recipeSelect.next(-1);
  }

  upDateRecipe(index: number, recipe: Recipe) {
    this.recipeService.upDateRecipe(index, recipe);
  }

  onSubmit(recipeForm) {
    console.log(recipeForm.value);
    const recipe: Recipe = recipeForm.value;
    if (this.isEdit) {
      this.upDateRecipe(this.indexEdit, recipe);
    } else {
      this.addRecipe(recipe);
    }
    this.recipeForm.reset();
    this.onCancel();
  }

  onDeleteIngredient(index: number) {
    this.ingredientsInputs.removeAt(index);
  }
}
