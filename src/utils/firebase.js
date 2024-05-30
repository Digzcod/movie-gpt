// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  authDomain: "moviegpt-f020b.firebaseapp.com",
  projectId: "moviegpt-f020b",
  storageBucket: "moviegpt-f020b.appspot.com",
  messagingSenderId: "249505563921",
  appId: "1:249505563921:web:8a3a3c82e32744a17238b0",
  measurementId: "G-MQQS9E7X70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    
export const authFireBase = getAuth(app)
