
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgDoP8mFhSvoTN6lGS0lsqK5AvdhZ4qSU",
  authDomain: "hype-19b14.firebaseapp.com",
  projectId: "hype-19b14",
  storageBucket: "hype-19b14.firebasestorage.app",
  messagingSenderId: "212206135653",
  appId: "1:212206135653:web:0c8c56586e2516502a198c"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage =getStorage(app);
export{db,storage};