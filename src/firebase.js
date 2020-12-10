import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9o-xQVPashgZUKbr_4a6bCp-q1vdKKKk",
    authDomain: "facebook-messenger-clone-d066c.firebaseapp.com",
    projectId: "facebook-messenger-clone-d066c",
    storageBucket: "facebook-messenger-clone-d066c.appspot.com",
    messagingSenderId: "628358750291",
    appId: "1:628358750291:web:b28b0880a94ddfb6c166a6",
    measurementId: "G-GPMPR0CKGN"
});

const db = firebaseApp.firestore();

export default db