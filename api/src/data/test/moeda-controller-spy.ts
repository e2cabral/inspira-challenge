import {IObterMoedas} from "../../domain/usecases/moeda/i-obter-moedas";
import {mockMoedas} from "./mocks";
import {Request, Response} from "express";

class MoedaControllerSpy implements IObterMoedas {
  constructor() {}

  moedas = mockMoedas();

  obter(req: Request, res: Response): any {
    try {
      return this.moedas;
    } catch (e) {
      return new Error('Mensagem de error');
    }
  }
}

export default new MoedaControllerSpy();
