// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHC_lI_mBVfp3tIeVRMYRLD-iuEx1Z818",
  authDomain: "atlas-clothing-storefront.firebaseapp.com",
  projectId: "atlas-clothing-storefront",
  storageBucket: "atlas-clothing-storefront.appspot.com",
  messagingSenderId: "607932168919",
  appId: "1:607932168919:web:9cae83002d1b6fabf94e92",
  measurementId: "G-4XHS3GJPBB"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();
export { db, storage }
 
// Firebase storage reference
