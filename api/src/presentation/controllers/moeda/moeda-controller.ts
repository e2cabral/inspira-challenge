import {IObterMoedas} from "../../../domain/usecases/moeda/i-obter-moedas";
import {Moeda} from "../../../domain/model/moeda-model";
import {Request, Response} from "express";

class MoedaController implements IObterMoedas {

  async obter(req: Request, res: Response): Promise<Response<Array<Moeda>>> {
    return res.json([]);
  }

}

export default new MoedaController();
