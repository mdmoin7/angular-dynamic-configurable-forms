import { Component, OnChanges, Input, EventEmitter, Output,SimpleChanges } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormConfig } from '../../models/form-config.model';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
   providers: [FormBuilderService]
})
export class FormBuilderComponent implements OnChanges {
  @Input() model: FormConfig;
  @Output() onSubmit = new EventEmitter();
  @Output() onLoad = new EventEmitter();
  form: FormGroup = null;
  constructor(private formService: FormBuilderService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.model) {
      this.form = this.formService.createMainFormGroup(changes.model.currentValue);
      this.onLoad.emit(this.form);
    }
  }

  formSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
      console.log("invalid form state");
    }
  }
}
