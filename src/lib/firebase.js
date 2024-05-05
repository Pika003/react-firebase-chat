import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat123-f4630.firebaseapp.com",
  projectId: "reactchat123-f4630",
  storageBucket: "reactchat123-f4630.appspot.com",
  messagingSenderId: "573161060746",
  appId: "1:573161060746:web:c97864d75d096032ecf073"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
