import {Router} from "express";
import MoedaController from '../../presentation/controllers/moeda/moeda-controller'

export default (router: Router): void => {
  router
    .get('/*', MoedaController.obter.bind(MoedaController))
    .get('/moedas', MoedaController.obter.bind(MoedaController));
}
