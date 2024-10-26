// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0mqPkjq07Udja-20Z7LwD_YpzoKmeeEs",
  authDomain: "wit-dreamin-2024-45710.firebaseapp.com",
  projectId: "wit-dreamin-2024-45710",
  storageBucket: "wit-dreamin-2024-45710.appspot.com",
  messagingSenderId: "566086156092",
  appId: "1:566086156092:web:2241e870236126a5492839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
