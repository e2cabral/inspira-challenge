import {IObterMoedasService} from "../../../../data/services/moeda/i-obter-moedas-service";
import {Moeda} from "../../../../domain/model/moeda-model";

export class MoedaService implements IObterMoedasService {
  async obter(): Promise<Array<Moeda>> {
    return [];
  }

}
