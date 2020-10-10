import {IObterMoedas} from "../../../domain/usecases/moeda/i-obter-moedas";
import {Moeda} from "../../../domain/model/moeda-model";
import {Request, Response} from "express";
import {MoedaService} from "../../../infra/services/bcb-service/moeda/moeda-service";

class MoedaController implements IObterMoedas {
  constructor(private readonly moedaService: MoedaService) {}
  async obter(req: Request, res: Response): Promise<Response<Array<Moeda>>> {
    return res.json(this.moedaService.obter());
  }

}

export default new MoedaController(new MoedaService());
