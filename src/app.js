import 'dotenv';
import express, { application } from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

class App {
  constructor () {
    this.server = express();

    // usa middleware() criado abaixo
    this.middleware();

    // usa routes() criado abaixo
    this.routes();
  }

  middleware() {
    /**
     * configuração para que o server entenda quando o corpo da requisição
     * for um json
    */
    this.server.use(express.json());

    /**
     * utilizando o cors para permitir que o front se comunique com a API
     */
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
};

export default new App().server;
