import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private static url(endPoint: string): string {
    return `${environment.bcb_api_url}/${endPoint}`;
  }

  async getCurrencies(): Promise<CurrencyResponse> {
    try {
      return this.http
        .get<CurrencyResponse>(CurrencyService.url('Moedas?format=json'))
        .toPromise();
    } catch (error) {
      throw new HttpErrorResponse(error);
    }
  }

  async getQuotationByCurrencyAndDate(currencySymbol: string, dateQuotation: string): Promise<QuotationResponse> {
    try {
      return this.http
        .get<QuotationResponse>(
          CurrencyService.url(`CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda=\'${currencySymbol}\'&@dataCotacao=\'${dateQuotation}\'&$top=100&$format=json`)
        ).toPromise();
    } catch (error) {
      throw new HttpErrorResponse(error);
    }
  }
}

export type CurrencyResponse = { value: Array<{ simbolo: string, nomeFormatado: string, tipoMoeda: string }> }
export type QuotationResponse = { value: Array<{ cotacaoCompra: number, cotacaoVenda: number, dataHoraCotacao: string, tipoBoletim: string }> }
