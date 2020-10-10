import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export default (app: Express): void => {
  const router = Router();
  app.use('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata', router);

  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
}
