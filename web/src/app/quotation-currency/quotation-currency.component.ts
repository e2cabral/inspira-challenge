import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";

@Component({
  selector: 'quotation-currency',
  templateUrl: './quotation-currency.component.html',
  styleUrls: ['./quotation-currency.component.css']
})
export class QuotationCurrencyComponent implements OnInit, AfterViewInit {

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
