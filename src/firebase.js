import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmnNBbCQsAfZ1AD7gsaghbE09CxdvDM8E",
    authDomain: "ecommerce-3c6e1.firebaseapp.com",
    projectId: "ecommerce-3c6e1",
    storageBucket: "ecommerce-3c6e1.appspot.com",
    messagingSenderId: "915045030289",
    appId: "1:915045030289:web:f503e441e037b97424a230"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
