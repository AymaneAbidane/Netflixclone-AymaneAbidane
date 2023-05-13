import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD4y9hKSzNy0l75Iak7zSdI0rNTkDGBNC0",
  authDomain: "netflixe-clone-1d013.firebaseapp.com",
  projectId: "netflixe-clone-1d013",
  storageBucket: "netflixe-clone-1d013.appspot.com",
  messagingSenderId: "283889238483",
  appId: "1:283889238483:web:8cf5848503f1c7a8d22f26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
