
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR4yrp9cRWmLZp2T25EAugMMVryHmznU8",
  authDomain: "chat-app-d3f25.firebaseapp.com",
  projectId: "chat-app-d3f25",
  storageBucket: "chat-app-d3f25.appspot.com",
  messagingSenderId: "913169750019",
  appId: "1:913169750019:web:ddeac846b441f35f295636",
 
};

export const app = initializeApp(firebaseConfig);
export  const auth= getAuth();
export const storage = getStorage();
export const db=getFirestore();