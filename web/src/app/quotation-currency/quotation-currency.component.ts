import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {Currency} from "./models/currency.model";

@Component({
  selector: 'quotation-currency',
  templateUrl: './quotation-currency.component.html',
  styleUrls: ['./quotation-currency.component.css']
})
export class QuotationCurrencyComponent implements OnInit, AfterViewInit {

  currencies: Array<Currency>;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getCurrencies();
  }

  //
  // @description método para obter os tipos de moedas fornecido pela api do Banco Central
  //
  getCurrencies(): void {
    try {
    this.currencyService
      .getCurrencies()
      .then((value) => {
        this.currencies = value.map(({ simbolo, nomeFormatado, tipoMoeda }) => new Currency(simbolo, nomeFormatado, tipoMoeda));
        console.log(this.currencies);
      });
    } catch (error) {
      console.error(error);
    }
  }

}
