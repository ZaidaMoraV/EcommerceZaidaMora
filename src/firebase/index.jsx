import firebase from "firebase/app";
import "@firebase/firestore";

// Your web app's Firebase configuration
// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyDM38jBr1C3Jr1LYxNGQIkzGLaC5_DoRNM",
    authDomain: "ecommerce-zaida-mora.firebaseapp.com",
    projectId: "ecommerce-zaida-mora",
    storageBucket: "ecommerce-zaida-mora.appspot.com",
    messagingSenderId: "979214485550",
    appId: "1:979214485550:web:f763b40b7df63ff681f7bf",
    measurementId: "G-G53P4JENL4"
});

export const getFirestore = () => {
    return firebase.firestore(app);
}
