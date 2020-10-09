import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CotacaoMoedaRoutingModule} from "./cotacao-moeda-routing.module";

import {CotacaoMoedaComponent} from "./cotacao-moeda.component";
import { CambioMoedaComponent } from './components/cambio-moeda/cambio-moeda.component';



@NgModule({
  declarations: [
    CotacaoMoedaComponent,
    CambioMoedaComponent
  ],
  imports: [
    CommonModule,

    CotacaoMoedaRoutingModule
  ]
})
export class CotacaoMoedaModule { }
