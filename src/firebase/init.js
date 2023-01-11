// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNnNwzvsL0o6BV0w4eEcoicx2XUL1BFwk",
  authDomain: "fir-41396.firebaseapp.com",
  projectId: "fir-41396",
  storageBucket: "fir-41396.appspot.com",
  messagingSenderId: "119504804800",
  appId: "1:119504804800:web:79592c2a32c229c15c0625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

