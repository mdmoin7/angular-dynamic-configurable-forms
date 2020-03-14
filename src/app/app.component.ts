import { Component } from '@angular/core';
import {FormConfig} from './formsy/models/form-config.model';
import { FieldConfig } from "src/app/formsy/models/field-config.model";
import { FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  sampleForm: FormGroup = null;
  sampleModel: FormConfig = null;
  addressControl: FieldConfig[] = [
    { name: "line1" },
    { name: "line2" },
    { name: "city", type: "dropdown" },
    { name: "state", type: "dropdown" },
    { name: "pincode", type: "number" }
  ];
  constructor() {
    this.initializeModel();
  }

  initializeModel() {
    this.sampleModel = {
      controls: [
        {
          name: "name",
          value:'test',
          validators: [Validators.required]
        },
        {
          name: "email",
          type: "email",
          validators: [Validators.required, Validators.email]
        },
        {
          name: "billing_address",
          controlType: "group",
          controls: this.addressControl
        },
        {
          name: "shipping_address",
          controlType: "array",
          controls:[{name:'',controlType:'group',controls:this.addressControl}]
        }
      ] 
    };
  }

  getFormObject(formObject:FormGroup){
  }
}
