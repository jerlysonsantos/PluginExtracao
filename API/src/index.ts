import 'reflect-metadata';
import 'module-alias/register';

import bodyParser from 'body-parser';
import cors from 'cors';
import App from './app';

import { ExtractionController } from './modules/extraction/controllers/extraction.controller';

const app = new App({
  port: Number(process.env.PORT) || 3000,
  controllers: [ExtractionController],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), cors()],
});

app.listen();
