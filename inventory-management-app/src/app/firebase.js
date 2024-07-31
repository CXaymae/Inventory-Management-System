// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4tAEudD2scvPsb4ECCsPvNMdm6VsdNkE",
  authDomain: "inventory-management-1649f.firebaseapp.com",
  projectId: "inventory-management-1649f",
  storageBucket: "inventory-management-1649f.appspot.com",
  messagingSenderId: "983621281685",
  appId: "1:983621281685:web:4e55ae58481ea9a03a389c",
  measurementId: "G-FL1NJE3F7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };