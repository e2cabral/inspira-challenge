import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CotacaoMoedaComponent} from "./cotacao-moeda.component";


const routes: Routes = [
  { path: '', component: CotacaoMoedaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacaoMoedaRoutingModule { }
