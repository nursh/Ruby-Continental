import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import "reflect-metadata";

require('dotenv').config({ path: '../.env' });

class App {

  public app: express.Application;
  private server: ApolloServer;


  constructor() {
    this.app = express();
    this.server = new ApolloServer({
      typeDefs,
      resolvers
    });
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.server.applyMiddleware({ app: this.app });
  }
}

export default new App().app;