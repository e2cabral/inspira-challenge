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
    this.currencyService
      .getCurrencies()
      .then(({ values }) => this.currencies = values.map(({ symbol, name, currencyType }) => new Currency(symbol, name, currencyType)));
  }

}
