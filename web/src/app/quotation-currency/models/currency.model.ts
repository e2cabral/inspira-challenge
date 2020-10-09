import {CurrencyType} from "./enum/currency-type.enum";

export class Currency {
  constructor(symbol: string, name: string, currencyType: CurrencyType) {
    this.symbol = symbol;
    this.name = name;
    this.currencyType = currencyType;
  }

  symbol: string;
  name: string;
  currencyType: CurrencyType;
}
