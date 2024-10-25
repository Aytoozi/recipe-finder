// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDljCmakUGPtpakLWqcyVg1Ac0chNAsPk8",
  authDomain: "recipe-finder-12118.firebaseapp.com",
  projectId: "recipe-finder-12118",
  storageBucket: "recipe-finder-12118.appspot.com",
  messagingSenderId: "234133451097",
  appId: "1:234133451097:web:565fa4f3e67cfee4f9dc48",
  measurementId: "G-NCXH7PY65D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);