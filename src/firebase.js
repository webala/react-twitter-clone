//FIREBASE CONFIGURATION

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWtccKSP9sUsw51PrpjCTNOOkjD_Fe_cM",
  authDomain: "twitter-clone-bcd01.firebaseapp.com",
  projectId: "twitter-clone-bcd01",
  storageBucket: "twitter-clone-bcd01.appspot.com",
  messagingSenderId: "598852007590",
  appId: "1:598852007590:web:378d3c62c2cd43a1722667",
  measurementId: "G-8D3P1LXPJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();
export default db;