import { FirebaseConnection } from 'src/database/config/firebase-connection';
import { PostgresConnection } from 'src/database/config/postgres-connection';

import firebase from 'firebase-admin';
import { Client } from 'pg';

export class Repository {
  protected connection: Client;

  constructor() {
    this.connection = PostgresConnection.getInstance().connection;
  }
}

export class FirebaseRepository {
  protected connection: firebase.database.Database;

  constructor() {
    this.connection = FirebaseConnection.getInstance().connection;
  }
}
