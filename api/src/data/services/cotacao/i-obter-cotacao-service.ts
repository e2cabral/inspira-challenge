import http from "http";
import {Response} from 'express';

export interface IObterCotacaoService {
  obter: (response: http.IncomingMessage, res: Response) => Promise<void>;
}
