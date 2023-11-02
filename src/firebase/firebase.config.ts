import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB23zUCwnn3X6MjzAzqZb6SEACjjXVI4cU",
  authDomain: "mazza-restaurant-aa375.firebaseapp.com",
  projectId: "mazza-restaurant-aa375",
  storageBucket: "mazza-restaurant-aa375.appspot.com",
  messagingSenderId: "263444533908",
  appId: "1:263444533908:web:5a33cb834eaac346ed5a81",
  measurementId: "G-L931GRM8NH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
