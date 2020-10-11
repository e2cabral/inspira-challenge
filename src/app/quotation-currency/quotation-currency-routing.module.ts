import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {QuotationCurrencyComponent} from "./quotation-currency.component";


const routes: Routes = [
  { path: '', component: QuotationCurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationCurrencyRoutingModule { }
