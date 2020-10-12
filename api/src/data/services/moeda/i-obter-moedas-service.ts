import http from "http";
import {Response} from "express";

export interface IObterMoedasService {
  obter: (response: http.IncomingMessage, res: Response) => Promise<void>;
}
