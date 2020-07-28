import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDUJSRgTjg5fbTMelXqUrie_pYrMgC-u4",
  authDomain: "r-cart.firebaseapp.com",
  databaseURL: "https://r-cart.firebaseio.com",
  projectId: "r-cart",
  storageBucket: "r-cart.appspot.com",
  messagingSenderId: "197346304371",
  appId: "1:197346304371:web:7395ed5571ddc3be356506",
  measurementId: "G-BPEHTBGPC5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prombt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
