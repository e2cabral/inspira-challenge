import {Router} from "express";
import CotacaoController from '../../presentation/controllers/cotacao/cotacao-controller'

export default (router: Router): void => {
  router.get('/cotacao', CotacaoController.obter.bind(CotacaoController));
}
