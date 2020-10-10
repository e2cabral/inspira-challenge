import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import setupRoutes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
setupRoutes(app);


export default app;
