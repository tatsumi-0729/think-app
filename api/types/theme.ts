import firebase from 'firebase';

export type Theme = {
  theme: string;
  createdAt: firebase.firestore.Timestamp;
};
