// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtuLzdi2m5eukj6Sr7NSUfHo-8SQyz2kQ",
  authDomain: "house-marketplace-app-68b73.firebaseapp.com",
  projectId: "house-marketplace-app-68b73",
  storageBucket: "house-marketplace-app-68b73.appspot.com",
  messagingSenderId: "814422252963",
  appId: "1:814422252963:web:3f603bdf3709c354b98e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();