// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBziCc7keXJKhDhnKPH1X4Ydox10O1Fg8g",
  authDomain: "netflix-gpt-165ed.firebaseapp.com",
  projectId: "netflix-gpt-165ed",
  storageBucket: "netflix-gpt-165ed.appspot.com",
  messagingSenderId: "522654966354",
  appId: "1:522654966354:web:613d5ee24edccf4129b58b",
  measurementId: "G-1Y4JM8XK9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
