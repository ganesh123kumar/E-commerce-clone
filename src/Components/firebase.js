// --------------------------------PREMIUM---------------------------------------------//
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfS6RYtCrqxrBIwknZKyh0U5-uUDmaCjY",
    authDomain: "challenge-ed855.firebaseapp.com",
    projectId: "challenge-ed855",
    storageBucket: "challenge-ed855.appspot.com",
    messagingSenderId: "304739565220",
    appId: "1:304739565220:web:0e5217b8ca9e38dc907031",
    measurementId: "G-82J6TP8W2L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };
