import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxNz_oL9yGDKL4MVtpmB6CNVH7D-ryikw",
  authDomain: "rileysapp-808e7.firebaseapp.com",
  projectId: "rileysapp-808e7",
  storageBucket: "rileysapp-808e7.firebasestorage.app",
  messagingSenderId: "753101991991",
  appId: "1:753101991991:web:08747f1727c693a9c70fb2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;