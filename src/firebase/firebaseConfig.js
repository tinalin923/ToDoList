import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1JV6ZDqsnR0p-ozvYQXEAeztE1NTNfDg",
    authDomain: "tinalin923.firebaseapp.com",
    projectId: "tinalin923",
    storageBucket: "tinalin923.appspot.com",
    messagingSenderId: "967031944451",
    appId: "1:967031944451:web:4c93292cf802855da0a536"
};
  
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };