import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.suscription =  this.slService.ingredientSelected.subscribe(
      (index: number) => {
        this.isEdit = index != null;
        this.indexEdit = index;
        this.initForm();
       }
    );
    this.initForm();
  }

  onAddItem() {
    const { name, amount } = this.slForm.value;
    if (name && amount) {
      const newIngredient = new Ingredient(name, amount);
      this.slService.addIngredient(newIngredient);
    }
    this.slForm.reset();
    this.isEdit = false;
  }

  private initForm() {
    let name = '';
    let amount = null;

    if (this.isEdit) {
      const recipe = this.slService.getIngredient(this.indexEdit);
      name = recipe.name;
      amount = recipe.amount;
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
    this.slService.selectIngredient(null);
    this.isEdit = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.indexEdit);
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
