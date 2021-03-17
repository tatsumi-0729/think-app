import 'firebase/firestore';
import * as firebase from 'firebase';

const firebaseConfig = require("../serviceAccountKey.json");

var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});


export const getThemeDocRef = async () => {
  return await firebase.firestore().collection('theme').doc();
};
