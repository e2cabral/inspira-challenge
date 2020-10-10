import {Moeda} from "../../../domain/model/moeda-model";

export interface IObterMoedasService {
  obter: () => Promise<Array<Moeda>>;
}
