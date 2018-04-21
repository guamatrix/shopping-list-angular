import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { HighLightDirective } from './higlight.directive';
import { UnlessDirective } from './unless.directive';
import { CustomPipe } from './custom.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    HighLightDirective,
    UnlessDirective,
    CustomPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownDirective,
    HighLightDirective,
    UnlessDirective,
    CustomPipe
  ]
})

export class SharedModule {}
