import { Component } from '@angular/core';
import {FormConfig} from './formsy/models/form-config.model';
import { FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  sampleForm: FormGroup = null;
  sampleModel: FormConfig = null;
  constructor() {
    this.initializeModel();
  }

  initializeModel() {
    this.sampleModel = {
      controls: [
        {
          name: "name",
          validators: [Validators.required]
        },
        {
          name: "email",
          type: "email",
          validators: [Validators.required]
        },
        {
          name: "billing_address",
          controlType: "group",
          controls: {
            controls: [
              { name: "line1" },
              { name: "line2" },
              { name: "city", type: "dropdown" },
              { name: "state", type: "dropdown" },
              { name: "pincode", type: "number" }
            ]
          }
        },        
        { name: "shipping_address", controlType: "array" }
      ]
    };
  }
  getFormObject(formObject:FormGroup){
    console.log(formObject.value);
  }
}
