import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoTs2FwrW77NX_1cSE_sKnnpazHdp34EU",
  authDomain: "openhouse-database.firebaseapp.com",
  projectId: "openhouse-database",
  storageBucket: "openhouse-database.firebasestorage.app",
  messagingSenderId: "1006718061358",
  appId: "1:1006718061358:web:d96d3c4bbd9ddb9ceb08bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);