import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ReceipesServices } from '../recipes.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.module';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit, OnDestroy {
  isEdit = false;
  indexEdit: number;
  recipeForm: FormGroup;
  ingredientsInputs: FormArray;
  // subscription =  new Subscription();
  subscription: Subscription;

  constructor(private recipeService: ReceipesServices,
    private routingActive: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.routingActive.params.subscribe(
      (params) => {
        this.indexEdit = +params.id;
        this.isEdit = params.id != null;
        this.recipeService.onSelectRecipe(this.isEdit ? this.indexEdit : -1);
        this.initForm();
      }
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.routingActive });
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
      this.subscription = this.recipeService.getRecipe().subscribe(
        (state: {recipe: Recipe, index: number}) => {
          if (state.index > -1) {
            name = state.recipe.name;
            description = state.recipe.description;
            imgPath = state.recipe.imgPath;
            state.recipe.ingredients.map(ingredient => {
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
        }
      );
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
  }

  upDateRecipe(recipe: Recipe) {
    this.recipeService.upDateRecipe(recipe);
    this.router.navigate(['home'], { relativeTo: this.routingActive });
  }

  onSubmit(recipeForm) {
    console.log(recipeForm.value);
    const recipe: Recipe = recipeForm.value;
    if (this.isEdit) {
      this.upDateRecipe(recipe);
    } else {
      this.addRecipe(recipe);
    }
    this.recipeForm.reset();
    this.onCancel();
  }

  onDeleteIngredient(index: number) {
    this.ingredientsInputs.removeAt(index);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
