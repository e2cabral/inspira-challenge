import {IObterCotacao} from "../../../domain/usecases/cotacao/i-obter-cotacao";
import https from "https";
import env from "../../../main/config/env";
import {CotacaoService} from "../../../infra/services/bcb-service/cotacao/cotacao-service";
import {Request, Response} from "express";

class CotacaoController implements IObterCotacao {
  constructor(private readonly cotacaoService: CotacaoService) {
  }
  async obter(req: Request, res: Response): Promise<void> {
    const { moeda, data } = req.query;
    try {
      https.get(
        `${env.bcb_api_url}/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda}'&@dataCotacao='${data}'&format=json`,
        (response) => this.cotacaoService.obter(response, res)
      );
    } catch (error) {
      console.log(error);
    }
  }

}

export default new CotacaoController(new CotacaoService());
