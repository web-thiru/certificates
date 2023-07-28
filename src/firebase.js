// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgtEHmwKR6z42Z87mCrxfOIFSGppliLY",
  authDomain: "certificates-thiru.firebaseapp.com",
  projectId: "certificates-thiru",
  storageBucket: "certificates-thiru.appspot.com",
  messagingSenderId: "1088405361390",
  appId: "1:1088405361390:web:fbcb9a92558e43762bd9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);