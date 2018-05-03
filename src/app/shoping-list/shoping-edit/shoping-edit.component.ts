import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { State } from '../store/shoppin-list.reducer';
import { selectedIngredient } from '../store/shopping-list.selectors';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  // esto es un alias la propiedad se llama srvElement pero dentro del componente se usa el alias element
  // @Input('srvElement') element: {type: string, name: string, content: string}
  // @ViewChild('nombre del tag con #algo en el template del componente' y es de tipo elementRef)
  // y se accede a su valor con nativeElement
  // existe contentChild y viewChild to acces a element
  slForm: FormGroup;
  isEdit = false;
  indexEdit: number;
  suscription: Subscription;

  constructor(private slService: ShoppingListService,
    private store: Store<State>) {}

  ngOnInit() {
    this.suscription = this.slService.getIngredientSelected()
      .subscribe(
        (state: { index: number, ingredient: Ingredient }) => {
          console.log(state);
          this.isEdit = state.index > -1;
          this.indexEdit = state.index;
          this.initForm(state.ingredient);
        }
      );
  }

  onAddItem() {
    const { name, amount } = this.slForm.value;
    if (name && amount) {
      const newIngredient = new Ingredient(name, amount);
      if (this.isEdit) {
        this.slService.updateIngredient(newIngredient);
      } else {
        this.slService.addIngredient(newIngredient);
      }
    }
    this.slForm.reset();
    this.isEdit = false;
  }

  private initForm(ingredient: Ingredient) {
    let name = '';
    let amount = null;

    if (this.isEdit) {
      name = ingredient.name;
      amount = ingredient.amount;
    }
    this.slForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, [Validators.required, this.validatorAmount])
    });

  }

  private validatorAmount(control: FormControl): { [s: string]: string } {
    if (control.value < 0) {
      return { message: 'only numbers at less 1'};
    }
    return null;
  }

  showError(key: string): string {
    const error = this.slForm.get(key).errors;
    if ('required' in error) {
      return 'required!';
    } else {
      return error.message;
    }
  }

  onClear() {
    this.slForm.reset();
    this.slService.selectIngredient(-1);
    this.isEdit = false;
  }

  onDelete() {
    this.slService.deleteIngredient();
  }

  ngOnDestroy() {
    // this.suscription.unsubscribe();
  }
}
