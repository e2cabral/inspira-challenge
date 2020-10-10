import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Currency} from "../../models/currency.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {CurrencyService, QuotationResponse} from "../../services/currency.service";
import {Quotation} from "../../models/quotation.model";

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() currencies: Array<Currency>;
  now: Date = new Date();

  firstQuotation: any;
  secondQuotation: any;

  firstCurrencyFormControl: FormControl = new FormControl(null);
  secondCurrencyFormControl: FormControl = new FormControl(null);
  dateFormControl: FormControl = new FormControl(null);

  form: FormGroup = new FormGroup({
    firstCurrency: this.firstCurrencyFormControl,
    secondCurrency: this.secondCurrencyFormControl,
    date: this.dateFormControl
  })

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.dateFormControl.setValue(new NgbDate(this.now.getFullYear(), this.now.getMonth(), this.now.getDay()))
  }

  getFirstQuotation(): void {
    if (!this.dateFormControl.value) {
      return;
    }
    const date = this.dateFormControl.value;
    this.getQuotationByCurrencyAndDate(
      this.firstCurrencyFormControl.value,
      `${date.month}-${date.day}-${date.year}`
    ).then(({ value}) => {
      this.firstQuotation = value.map(
        ({ cotacaoCompra, cotacaoVenda, dataHoraCotacao, tipoBoletim }) => new Quotation(cotacaoVenda, cotacaoCompra, dataHoraCotacao, tipoBoletim)
      )[value.length - 1];
    });
  }

  getSecondQuotation(): void {
    if (!this.dateFormControl.value) {
      return;
    }
    const date = this.dateFormControl.value;
    this.getQuotationByCurrencyAndDate(
      this.secondCurrencyFormControl.value,
      `${date.month}-${date.day}-${date.year}`
    ).then(({ value}) => {
      this.secondQuotation = value.map(
        ({ cotacaoCompra, cotacaoVenda, dataHoraCotacao, tipoBoletim }) => new Quotation(cotacaoVenda, cotacaoCompra, dataHoraCotacao, tipoBoletim)
      )[value.length - 1];
    });
  }

  getQuotationByDate(): void {
    if (this.firstCurrencyFormControl.value && this.firstCurrencyFormControl.value !== '') this.getFirstQuotation();
    if (this.secondCurrencyFormControl.value && this.secondCurrencyFormControl.value !== '') this.getSecondQuotation();

    return;
  }

  async getQuotationByCurrencyAndDate(currency: string, date: string): Promise<QuotationResponse> {
    try {
      return await this.currencyService.getQuotationByCurrencyAndDate(currency, date);
    } catch (error) {
      console.error(error);
    }
  }

  // getLastBuyingValue(quotation: Array<Quotation>): number {
  //   return  quotation !== undefined ? quotation[quotation.length - 1].buy : 0;
  // }
}
