import {IObterMoedasService} from "../../../../data/services/moeda/i-obter-moedas-service";
import http from 'http';
import {Response} from "express";

export class MoedaService implements IObterMoedasService {

  async obter(response: http.IncomingMessage, res: Response): Promise<void> {
    try {
      response.on('data', (chunk) => {
        chunk = JSON.parse(chunk);
        res.json(chunk.value);
      })
    } catch (error) {
      throw new Error(error);
    }
  }
}
