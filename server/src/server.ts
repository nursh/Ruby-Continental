import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import "reflect-metadata";


import resolvers from './graphql/resolvers';

require('dotenv').config({ path: '../.env' });

class App {

  public app: express.Application;
  private server: ApolloServer;

  constructor() {
    this.app = express();
    this.server = new ApolloServer({
      typeDefs: importSchema('./src/graphql/schema.graphql'),
      resolvers
    });
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json(), cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.server.applyMiddleware({ app: this.app });
  }

}

export default new App().app ;