import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../models/currency.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private static url(endPoint: string): string {
    return `${environment.bcb_api_url}/${endPoint}`;
  }

  async getCurrencies(): Promise<Array<Currency>> {
    try {
      return this.http
        .get<Array<Currency>>(CurrencyService.url('Moedas?format=json'))
        .toPromise();
    } catch (e) {

    }
  }
}
