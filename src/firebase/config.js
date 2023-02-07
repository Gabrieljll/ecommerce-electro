import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8DdgUlb9ZlrUOYJI9DF-I3xx53WdQdYs",
  authDomain: "natpotencia.firebaseapp.com",
  projectId: "natpotencia",
  storageBucket: "natpotencia.appspot.com",
  messagingSenderId: "431297393215",
  appId: "1:431297393215:web:2b86f2c73464709e28fe8a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)