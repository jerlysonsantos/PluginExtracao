import { FirebaseConnection } from 'src/database/config/firebase-connection';
import { PostgresConnection } from 'src/database/config/postgres-connection';

import firebase from 'firebase-admin';

export class Repository {
  protected connection: PostgresConnection;

  constructor() {
    this.connection = PostgresConnection.getInstance();
  }
}

export class FirebaseRepository {
  protected connection: firebase.database.Database;

  constructor() {
    this.connection = FirebaseConnection.getInstance().connection;
  }
}
