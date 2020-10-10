import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../models/currency.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() currencies: Array<Currency>;

  firstCurrencyFormControl: FormControl = new FormControl(null);
  secondCurrencyFormControl: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit() {
  }

}
