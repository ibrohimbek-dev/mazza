import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyA1zkDkh0zH-sUdXFCCfm16IvIGr8x-d1k",
  authDomain: "mazza-c6ad7.firebaseapp.com",
  projectId: "mazza-c6ad7",
  storageBucket: "mazza-c6ad7.appspot.com",
  messagingSenderId: "202088897998",
  appId: "1:202088897998:web:7ce6be8f7d80bbdf291f9f",
  measurementId: "G-6VFG6SGSDE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app); // Initialize Firebase Storage

export default app;
export { db, auth, storage };
