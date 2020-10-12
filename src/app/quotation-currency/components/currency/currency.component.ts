import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../models/currency.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  firstQuotation: { buy: number, notice: string, sell: number, dateTime: string };
  secondQuotation: { buy: number, notice: string, sell: number, dateTime: string };

  firstCurrencyFormControl: FormControl = new FormControl(null);
  secondCurrencyFormControl: FormControl = new FormControl(null);
  dateFormControl: FormControl = new FormControl(null, [Validators.required]);

  amountFirstCurrencyFormControl: FormControl = new FormControl(1);
  amountSecondCurrencyFormControl: FormControl = new FormControl(1);

  form: FormGroup = new FormGroup({
    firstCurrency: this.firstCurrencyFormControl,
    secondCurrency: this.secondCurrencyFormControl,
    date: this.dateFormControl
  })

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    // this.dateFormControl.setValue({ year: this.now.getFullYear(), month: this.now.getMonth(), day: this.now.getDate() });
    this.amountFirstCurrencyFormControl
      .valueChanges
      .subscribe((control: any) => {
        const unitValue = parseFloat((this.firstQuotation.buy / this.secondQuotation.buy).toFixed(2));
        this.amountSecondCurrencyFormControl.setValue((unitValue * control).toFixed(2));
      });
  }

  getFirstQuotation(): void {
    if (this.form.invalid) return;

    const date = this.dateFormControl.value;

    this.getQuotationByCurrencyAndDate(
      this.firstCurrencyFormControl.value,
      `${date.month}-${date.day}-${date.year}`
    ).then(async ({ value}) => {
      this.firstQuotation = await value.map(
        (quotation) => new Quotation(quotation.cotacaoVenda, quotation.cotacaoCompra, quotation.dataHoraCotacao, quotation.tipoBoletim)
      )[value.length - 1];
    });
  }

  getSecondQuotation(): void {
    if (this.form.invalid) return;

    const date = this.dateFormControl.value;

    this.getQuotationByCurrencyAndDate(
      this.secondCurrencyFormControl.value,
      `${date.month}-${date.day}-${date.year}`
    ).then(async ({ value}) => {
      this.secondQuotation = await value.map(
        (quotation) => new Quotation(quotation.cotacaoVenda, quotation.cotacaoCompra, quotation.dataHoraCotacao, quotation.tipoBoletim)
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

  verifyDateEmpty(): boolean {
    return this.dateFormControl.value && this.dateFormControl.value !== '';
  }
}
