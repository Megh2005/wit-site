// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTzxVXGfSFMIxih-kKJ-zfYN7Lm76ukI",
  authDomain: "wit-dreamin-kolkata-2024.firebaseapp.com",
  projectId: "wit-dreamin-kolkata-2024",
  storageBucket: "wit-dreamin-kolkata-2024.appspot.com",
  messagingSenderId: "765180029737",
  appId: "1:765180029737:web:bf150531ddbd403eb12538",
  measurementId: "G-D80KPNCYFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
