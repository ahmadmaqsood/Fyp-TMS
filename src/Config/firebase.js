// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ-iQghEcoQz8YjjdJpo-MZYw3e_BTiFA",
    authDomain: "zoa-clinic.firebaseapp.com",
    projectId: "zoa-clinic",
    storageBucket: "zoa-clinic.appspot.com",
    messagingSenderId: "335797320254",
    appId: "1:335797320254:web:576ef1a21cc17d7ed2af6f",
    measurementId: "G-S28M83TPYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {auth ,analytics};
