import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from "@ng-select/ng-select";

import {QuotationCurrencyRoutingModule} from "./quotation-currency-routing.module";

import {QuotationCurrencyComponent} from "./quotation-currency.component";
import { CurrencyComponent } from './components/currency/currency.component';



@NgModule({
  declarations: [
    QuotationCurrencyComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,

    QuotationCurrencyRoutingModule
  ]
})
export class QuotationCurrencyModule { }
