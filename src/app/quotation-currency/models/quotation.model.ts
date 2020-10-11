export class Quotation {
  constructor(sell: number, buy: number, dateTime: string, notice: string) {
    this.sell = sell;
    this.buy = buy;
    this.dateTime = dateTime;
    this.notice = notice;
  }
  sell: number;
  buy: number;
  dateTime: string;
  notice: string;
}
