// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChAN4-GXVhjTlg02JBqazrbPO6xJPcCA8",
  authDomain: "ecosocial-landing-5aa7d.firebaseapp.com",
  projectId: "ecosocial-landing-5aa7d",
  storageBucket: "ecosocial-landing-5aa7d.appspot.com",
  messagingSenderId: "1006235948212",
  appId: "1:1006235948212:web:09cfc186dbf91011e8f3e1",
  measurementId: "G-LLB0RMT3WE",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
