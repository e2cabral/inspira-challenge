import {Request, Response} from "express";

export interface IObterCotacao {
  obter: (req: Request, res: Response) => Promise<void>;
}
