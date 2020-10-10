import {IObterMoedasService} from "../../../../data/services/moeda/i-obter-moedas-service";
import env from '../../../../main/config/env';
import https from 'https';

export class MoedaService implements IObterMoedasService {
  async obter(): Promise<void> {
    await https.get(
      `${env.bcb_api_url}/Moedas?format=json`,
      { headers: { contentType: 'application/json' } }, (response) => {
      response.on('data', (chunk) => JSON.parse(chunk.value));
    }).end();
  }
}
