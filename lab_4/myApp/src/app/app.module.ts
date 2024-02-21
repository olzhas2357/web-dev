import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from "./app.component";
import {PhoneComponent} from "./components/phone/phone.component";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppComponent,
    PhoneComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
