import {Request, Response} from "express";
import {Moeda} from "../../model/moeda-model";

export interface IObterMoedas {
  obter: (req: Request, res: Response) => Promise<Response<Array<Moeda>>>;
}
