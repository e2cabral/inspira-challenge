import {Request, Response} from "express";

export interface IObterMoedas {
  obter: (req: Request, res: Response) => Promise<any>;
}
