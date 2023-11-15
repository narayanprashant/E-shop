import firebase from "firebase";
//import "firebase/compat/auth"
//import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDJEQTNEdNaLR9YcmfqCwWHCqq81fnrLX4",
    authDomain: "eshop-ddb4e.firebaseapp.com",
    projectId: "eshop-ddb4e",
    storageBucket: "eshop-ddb4e.appspot.com",
    messagingSenderId: "885000618837",
    appId: "1:885000618837:web:065ecea4e4ef45af9765dc",
    measurementId: "G-RK07KDKHMG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

