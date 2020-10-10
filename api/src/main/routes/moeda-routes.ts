import {Router} from "express";

export default (router: Router): void => {
  router.get('/Moedas?$format=json');
}
