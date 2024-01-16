// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBfFbZkRN6mXUdaYFIb_W1S9n57QssHgA",
    authDomain: "chat-app-4a94b.firebaseapp.com",
    projectId: "chat-app-4a94b",
    storageBucket: "chat-app-4a94b.appspot.com",
    messagingSenderId: "793052059716",
    appId: "1:793052059716:web:5e55b53a1b5e169e3c4411",
    measurementId: "G-8YHM2REZZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)