import {IObterMoedas} from "../../../domain/usecases/moeda/i-obter-moedas";
import {Request, Response} from "express";
import {MoedaService} from "../../../infra/services/bcb-service/moeda/moeda-service";

import https from 'https'
import env from "../../../main/config/env";

class MoedaController implements IObterMoedas {
  constructor(private readonly moedaService: MoedaService) {}

  async obter(req: Request, res: Response): Promise<any> {
    try {
      https.get(
        `${env.bcb_api_url}/Moedas?format=json`,
        (response) => this.moedaService.obter(response, res)
      );
    } catch (error) {
      return new Error(error);
    }
  }

}

export default new MoedaController(new MoedaService());
