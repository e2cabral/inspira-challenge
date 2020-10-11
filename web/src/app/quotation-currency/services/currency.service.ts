import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private static url(endPoint: string): string {
    return `${environment.bcb_api_interceptor}/${endPoint}`;
  }

  async getCurrencies(): Promise<CurrencyResponse> {
    try {
      return this.http
        .get<CurrencyResponse>(CurrencyService.url('moedas'))
        .toPromise();
    } catch (error) {
      throw new HttpErrorResponse(error);
    }
  }

  async getQuotationByCurrencyAndDate(currencySymbol: string, dateQuotation: string): Promise<QuotationResponse> {
    try {
      return this.http
        .get<QuotationResponse>(
          CurrencyService.url(`cotacao?moeda=${currencySymbol}&dataCotacao=${dateQuotation}`)
        ).toPromise();
    } catch (error) {
      throw new HttpErrorResponse(error);
    }
  }
}

export type CurrencyResponse = Array<{ simbolo: string, nomeFormatado: string, tipoMoeda: string }>;
export type QuotationResponse = { value: Array<{ cotacaoCompra: number, cotacaoVenda: number, dataHoraCotacao: string, tipoBoletim: string }> }
