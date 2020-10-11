import http from "http";
import {Response} from "express";
import {IObterCotacaoService} from "../../../../data/services/cotacao/i-obter-cotacao-service";

export class CotacaoService implements IObterCotacaoService {
  async obter(response: http.IncomingMessage, res: Response): Promise<void> {
    try {
      response.on('data', (chunk) => {
        chunk = JSON.parse(chunk);
        res.json(chunk);
      })
    } catch (error) {
      throw new Error(error);
    }
  }
}
