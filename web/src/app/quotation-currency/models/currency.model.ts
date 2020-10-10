export class Currency {
  constructor(symbol: string, name: string, currencyType: string) {
    this.symbol = symbol;
    this.name = name;
    this.currencyType = currencyType;
  }

  symbol: string;
  name: string;
  currencyType: string;
}
