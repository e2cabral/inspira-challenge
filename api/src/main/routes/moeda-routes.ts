import {Router} from "express";
import MoedaController from '../../presentation/controllers/moeda/moeda-controller'

export default (router: Router): void => {
  router.get('/moedas', MoedaController.obter.bind(MoedaController));
}
