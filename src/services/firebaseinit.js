// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR7qN_FHvAox6_LxLlBVgaavEmWCQv8KQ",
  authDomain: "wit-dreamin-2024-d9a74.firebaseapp.com",
  projectId: "wit-dreamin-2024-d9a74",
  storageBucket: "wit-dreamin-2024-d9a74.appspot.com",
  messagingSenderId: "75191014393",
  appId: "1:75191014393:web:8f4671f2c3de8fc3b62328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
