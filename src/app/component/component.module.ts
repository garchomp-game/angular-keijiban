import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
const ComponentList: Array<any> = [
  InputTextComponent,
  SubmitButtonComponent,
];
@NgModule({
  declarations: ComponentList,
  imports: [
    CommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: ComponentList
})
export class ComponentModule { }
