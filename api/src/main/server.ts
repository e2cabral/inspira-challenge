import express, {Request, Response} from 'express';
import https from 'https';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  try {
    await https.get('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?format=json', { headers: { contentType: 'application/json' } }, (response) => {
      response.on('data', (chunk) => {
        res.json(JSON.parse(chunk));
      });
    }).end();
  } catch (e) {
    res.json(e);
  }
});

app.listen(3000, () => console.log('A API do projeto Inspira está rodando.'));
