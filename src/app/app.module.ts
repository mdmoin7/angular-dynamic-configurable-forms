import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsyModule} from './formsy/formsy.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsyModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
