import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlZTfWwKc7iELXsEpv44hi609aNvsIb6g",
  authDomain: "viro-clip.firebaseapp.com",
  projectId: "viro-clip",
  storageBucket: "viro-clip.firebasestorage.app",
  messagingSenderId: "640417221792",
  appId: "1:640417221792:web:05a105493b864f6e54cdc5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
