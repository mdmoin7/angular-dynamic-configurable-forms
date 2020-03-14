import { Injectable } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FormConfig } from "../models/form-config.model";
import { FieldUpdates, ModelConfig } from "../models/field-config.model";

@Injectable()
export class FormBuilderService {
  constructor() {}

  createMainFormGroup(model: FormConfig): FormGroup {
    let form: FormGroup = new FormGroup({}, { updateOn: model.updateOn });
    for (let ctrl of model.controls) {
      const control = this.controlSelector(ctrl);
      form.addControl(ctrl.name, control);
    }
    return form;
  }

  private controlSelector(ctrl) {
    let control = null;
    switch (ctrl.controlType) {
      case "group":
        control = this.createFormGroup(ctrl.controls, ctrl.updateOn);
        break;
      case "array":
        control = this.createFormArray(ctrl.controls, ctrl.updateOn);
        break;
      default:
        control = this.createControl(
          ctrl.value,
          ctrl.validators,
          ctrl.updateOn
        );
    }
    return control;
  }

  private createFormGroup(group, updateOn:'change'|'blur'|'submit'='blur') {
    let formGroup: FormGroup = new FormGroup({}, { updateOn });
    for (let ctrl of group) {
      const c = this.createControl(ctrl.value, ctrl.validators, ctrl.updateOn);
      formGroup.addControl(ctrl.name, c);
    }
    return formGroup;
  }

  private createFormArray(array, updateOn) {
    let formArray = new FormArray([], { updateOn });
    if (array&&array.length > 0) {
      for (let item of array) {
        const control = this.controlSelector(item);
        formArray.push(control);
      }
    }
    return formArray;
  }

  private createControl(
    defaultValue,
    validators: any[],
    updateOn: FieldUpdates = "blur"
  ) {
    return new FormControl(defaultValue, { validators, updateOn });
  }
}
