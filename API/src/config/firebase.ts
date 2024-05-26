import * as admin from 'firebase-admin';
require('dotenv').config();
var serviceAccount = require('./serviceAccountKey.json');

export const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};
