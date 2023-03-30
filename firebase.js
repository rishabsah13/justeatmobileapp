// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvZa8Qw362jSz8Kx2R_MmDNwjKtj-gSKk",
    authDomain: "justeat-3830b.firebaseapp.com",
    projectId: "justeat-3830b",
    storageBucket: "justeat-3830b.appspot.com",
    messagingSenderId: "928501884607",
    appId: "1:928501884607:web:c39927c2fe5d5bf9fac80a"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;