// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo_RnECzTWok4_U75-Nd-GpeQQ2kvUDCQ",
  authDomain: "auth-1cdf5.firebaseapp.com",
  projectId: "auth-1cdf5",
  storageBucket: "auth-1cdf5.appspot.com",
  messagingSenderId: "576502315592",
  appId: "1:576502315592:web:6b675db5cb6291375b767d",
  measurementId: "G-BVQE9ST7LS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };