import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import { ApolloServer, gql } from 'apollo-server-express';
import "reflect-metadata";


import resolvers from './graphql/resolvers';
import { readFileSync } from 'fs';

require('dotenv').config({ path: '../.env' });

class App {

  public app: express.Application;
  private server: ApolloServer;

  constructor() {
    this.app = express();
    this.server = new ApolloServer({
      typeDefs: gql(readFileSync('./src/graphql/schema.graphql', 'UTF-8')),
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