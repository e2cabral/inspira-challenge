import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CotacaoMoedaModule } from "./cotacao-moeda/cotacao-moeda.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CotacaoMoedaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
