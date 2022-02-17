// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPjLhO8d0eE3Qb3VtdTAqpgKDmuGSNNXk",
  authDomain: "ecosocial-landing-e12d5.firebaseapp.com",
  projectId: "ecosocial-landing-e12d5",
  storageBucket: "ecosocial-landing-e12d5.appspot.com",
  messagingSenderId: "683456922624",
  appId: "1:683456922624:web:2ca588a9212ae536d6c4e5",
  measurementId: "G-R5R7M66HQ7",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
