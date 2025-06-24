// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5gZjV2mSIzqisUcLR7tFzT8o_WJG8Q4w",
  authDomain: "chogyalportfolio.firebaseapp.com",
  projectId: "chogyalportfolio",
  storageBucket: "chogyalportfolio.appspot.com",
  messagingSenderId: "663665324761",
  appId: "1:663665324761:web:2db15579a74259e6c344c8",
  measurementId: "G-EGNXH9FYHM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
