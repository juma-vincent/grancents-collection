import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRFDyeuc1g80YzDAkI-YbUO_db109z_CE",
  authDomain: "vinsoncode-clothing-db.firebaseapp.com",
  databaseURL: "https://vinsoncode-clothing-db.firebaseio.com",
  projectId: "vinsoncode-clothing-db",
  storageBucket: "vinsoncode-clothing-db.appspot.com",
  messagingSenderId: "505378006129",
  appId: "1:505378006129:web:e9f52cdc0d98895fefa7d0",
  measurementId: "G-BBRQ46F5JQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
