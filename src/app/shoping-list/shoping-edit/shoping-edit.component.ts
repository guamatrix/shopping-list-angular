import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  // esto es un alias la propiedad se llama srvElement pero dentro del componente se usa el alias element
  // @Input('srvElement') element: {type: string, name: string, content: string}
  // @ViewChild('nombre del tag con #algo en el template del componente' y es de tipo elementRef)
  // y se accede a su valor con nativeElement
  // existe contentChild y viewChild to acces a element
  @ViewChild('inputName') name: ElementRef;
  @ViewChild('inputAmount') amount: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    console.log('init');
  }

  onAddItem(ev) {
    ev.preventDefault();
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    if (name && amount) {
      const newIngredient = new Ingredient(name, amount);
      this.slService.addIngredient(newIngredient);
    }
  }

}
