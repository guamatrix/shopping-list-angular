import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { HighLightDirective } from './higlight.directive';
import { UnlessDirective } from './unless.directive';
import { CustomPipe } from './custom.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    DropdownDirective,
    HighLightDirective,
    UnlessDirective,
    CustomPipe,
    CustomInputComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownDirective,
    HighLightDirective,
    CustomInputComponent,
    UnlessDirective,
    CustomPipe
  ]
})

export class SharedModule {}
