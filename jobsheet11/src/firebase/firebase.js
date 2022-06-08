import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSQABZHZlF6W60X-Q6SW-dcIVC759O_VE",
    authDomain: "reactpbf.firebaseapp.com",
    projectId: "reactpbf",
    storageBucket: "reactpbf.appspot.com",
    messagingSenderId: "1030852580335",
    appId: "1:1030852580335:web:91ef234ce57289a7485c1a",
    measurementId: "G-KSJF7DWV0W"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
