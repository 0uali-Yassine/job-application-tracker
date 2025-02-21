import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID ,
  measurementId: process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const Provider = new GoogleAuthProvider();

/**
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyfIM3fqNpdfr3UviF3Pp7b0QqR9LX2XY",
  authDomain: "job-application-tracker-b7ceb.firebaseapp.com",
  projectId: "job-application-tracker-b7ceb",
  storageBucket: "job-application-tracker-b7ceb.firebasestorage.app",
  messagingSenderId: "1069946496460",
  appId: "1:1069946496460:web:67e203dddd3c56e870a969",
  measurementId: "G-TL20JBJZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */