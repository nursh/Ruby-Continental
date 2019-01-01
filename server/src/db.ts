import { createConnection, Connection } from "typeorm";

class DB {
  public connection: Connection;

  constructor() {
    this.getConnection();
  }

  async initializeConnection() {
    const connection = await createConnection();
    return connection;
  }

  async getConnection() {
    this.connection = await this.initializeConnection();
  }
}

new DB().connection;
