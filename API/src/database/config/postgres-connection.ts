import { Client } from 'pg';
import { pgConfig } from 'src/config/database';

export { PostgresConnection };

class PostgresConnection {
  private static _instance: PostgresConnection;

  constructor() {
    const connection = new Client({
      ...pgConfig,
    });

    try {
      connection.connect();
    } catch (error) {
      console.error(error.message);
    }

    return connection;
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new PostgresConnection();
    return this._instance;
  }
}
