import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

import {QuotationCurrencyRoutingModule} from "./quotation-currency-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

import {QuotationCurrencyComponent} from "./quotation-currency.component";
import { CurrencyComponent } from './components/currency/currency.component';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ɵs } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    QuotationCurrencyComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    NgbDatepickerModule,

    QuotationCurrencyRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    NgSelectConfig,
    ɵs
  ]
})
export class QuotationCurrencyModule { }
