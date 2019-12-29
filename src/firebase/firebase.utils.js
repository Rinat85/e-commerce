import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAObKwE6sP8hHSIdzNsBdHGwXu3hGk738U",
    authDomain: "e-shop-edb.firebaseapp.com",
    databaseURL: "https://e-shop-edb.firebaseio.com",
    projectId: "e-shop-edb",
    storageBucket: "e-shop-edb.appspot.com",
    messagingSenderId: "31031149997",
    appId: "1:31031149997:web:d7ad28440249d0af7b0d24",
    measurementId: "G-9KWM8FNZTJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;