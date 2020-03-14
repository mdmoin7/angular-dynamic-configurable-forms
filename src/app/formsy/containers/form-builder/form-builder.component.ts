import { Component, OnChanges, Input, EventEmitter, Output,SimpleChanges } from '@angular/core';
import {FormGroup, FormArray} from '@angular/forms';
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
  arrayFields:any={};
  constructor(private formService: FormBuilderService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.model) {
      this.form = this.formService.createMainFormGroup(changes.model.currentValue);
      const list=changes.model.currentValue.controls.filter(c=>c.controlType==='array');
      for(let l of list){
        this.arrayFields[l.name]=this.form.get(l.name)['controls'][0];
      }
      console.log(this.arrayFields);
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

  addMore(key:string){
    this.form.get(key)['push'](this.arrayFields[key]);
  }
  removeSelected(key:string, index:number){
    this.form.get(key)['removeAt'](index);
  }
}
