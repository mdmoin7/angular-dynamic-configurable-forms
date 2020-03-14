import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsyModule} from './formsy/formsy.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsyModule ],
  declarations: [ AppComponent, HelloComponent, DemoFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
