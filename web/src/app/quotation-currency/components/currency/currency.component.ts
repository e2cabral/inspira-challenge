import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../models/currency.model";

@Component({
  selector: 'cambio-moeda',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() currencies: Array<Currency>;

  constructor() { }

  ngOnInit() {
  }

}
