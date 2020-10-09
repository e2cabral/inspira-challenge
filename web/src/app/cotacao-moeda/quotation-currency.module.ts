import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {QuotationCurrencyRoutingModule} from "./quotation-currency-routing.module";

import {QuotationCurrencyComponent} from "./quotation-currency.component";
import { CambioMoedaComponent } from './components/cambio-moeda/cambio-moeda.component';



@NgModule({
  declarations: [
    QuotationCurrencyComponent,
    CambioMoedaComponent
  ],
  imports: [
    CommonModule,

    QuotationCurrencyRoutingModule
  ]
})
export class QuotationCurrencyModule { }
