import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvI03uEvWXJ3naThcBXNtIUkT_zbBK9Sc",
  authDomain: "mads-2218f.firebaseapp.com",
  databaseURL: "https://mads-2218f-default-rtdb.firebaseio.com/",
  projectId: "mads-2218f",
  storageBucket: "mads-2218f.appspot.com",
  messagingSenderId: "138827666883",
  appId: "1:138827666883:web:5c3ee3539b8b24724dd976"
};

// Initialize Firebase for SSR
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };