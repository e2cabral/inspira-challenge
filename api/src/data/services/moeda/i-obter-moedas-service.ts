import {ClientRequest} from "http";
import {Response} from "express";

export interface IObterMoedasService {
  obter: (response: ClientRequest, res: Response) => Promise<void>;
}
