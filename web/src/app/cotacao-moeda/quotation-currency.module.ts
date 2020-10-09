import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {QuotationCurrencyRoutingModule} from "./quotation-currency-routing.module";

import {QuotationCurrencyComponent} from "./quotation-currency.component";
import { CurrencyComponent } from './components/cambio-moeda/currency.component';



@NgModule({
  declarations: [
    QuotationCurrencyComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,

    QuotationCurrencyRoutingModule
  ]
})
export class QuotationCurrencyModule { }
