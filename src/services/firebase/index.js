import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGdYQlnU1BXL2umSZ1scKFiqB3tQSQ0aE",
    authDomain: "backend-itemcollection.firebaseapp.com",
    projectId: "backend-itemcollection",
    storageBucket: "backend-itemcollection.appspot.com",
    messagingSenderId: "439134542331",
    appId: "1:439134542331:web:30fb9f11a0fe83f8ea935e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)