import { PostgresConnection } from 'src/database/config/postgres-connection';

import { Client } from 'pg';

export class Repository {
  protected connection: Client;

  constructor() {
    this.connection = PostgresConnection.getInstance().connection;
  }
}
