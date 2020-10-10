import {Router} from "express";
import MoedaController from '../../presentation/controllers/moeda/moeda-controller'

export default (router: Router): void => {
  router.get('/Moedas?$format=json', MoedaController.obter);
}
