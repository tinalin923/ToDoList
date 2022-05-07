// require('dotenv').config
import { initializeApp } from 'firebase/app';
//for firestore
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import { getAuth, connectAuthEmulator } from 'firebase/auth';



const firebaseConfig = {
    apiKey: 'AIzaSyA1JV6ZDqsnR0p-ozvYQXEAeztE1NTNfDg',
    authDomain: 'tinalin923.firebaseapp.com',
    projectId: 'tinalin923',
    storageBucket: 'tinalin923.appspot.com',
    messagingSenderId: '967031944451',
    appId: '1:967031944451:web:4c93292cf802855da0a536'
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8080);

export { auth, db };
