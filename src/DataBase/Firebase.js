import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
import "firebase/compat/functions";
// import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCws-q006OE5clgNRm56BazpdF4_HjwnVE",

  authDomain: "model-cba62.firebaseapp.com",

  projectId: "model-cba62",

  storageBucket: "model-cba62.appspot.com",

  messagingSenderId: "469878041091",

  appId: "1:469878041091:web:fa0d07967ccdd9e28afc36",

  measurementId: "G-BRP9C3N04J"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const functions = firebase.functions();
// const messaging = firebase.messaging();

export {
  auth,
  firebase,
  db,
  storage,
  googleAuthProvider,
  facebookAuthProvider,
  functions,
  // messaging,
};
export default firebaseConfig;
