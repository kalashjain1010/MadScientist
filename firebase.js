import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvI03uEvWXJ3naThcBXNtIUkT_zbBK9Sc",
  authDomain: "mads-2218f.firebaseapp.com",
  databaseURL: "https://mads-2218f-default-rtdb.firebaseio.com",
  projectId: "mads-2218f",
  storageBucket: "mads-2218f.appspot.com",
  messagingSenderId: "138827666883",
  appId: "1:138827666883:web:5c3ee3539b8b24724dd976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
