import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../models/currency.model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  async getCurrencies(): Promise<Array<Currency>> {
    try {
      return this.http.get<Array<Currency>>('').toPromise();
    } catch (e) {

    }
  }
}
