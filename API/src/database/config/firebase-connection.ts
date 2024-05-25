import firebase from 'firebase-admin';
import { firebaseConfig } from 'src/config/firebase';

export { FirebaseConnection };

class FirebaseConnection {
  private static _instance: FirebaseConnection;

  constructor() {
    firebase.initializeApp({
      ...firebaseConfig,
    });
  }

  public get connection(): firebase.database.Database {
    return firebase.database();
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new FirebaseConnection();
    return this._instance;
  }
}
