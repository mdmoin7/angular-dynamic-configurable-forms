import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilderComponent} from './containers/form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent]
})
export class FormsyModule { }