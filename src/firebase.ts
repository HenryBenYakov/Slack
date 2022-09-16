import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNBiykuhfTvN6TG3VXQZdBcn_HKRk3k3E",
    authDomain: "slack-c5741.firebaseapp.com",
    projectId: "slack-c5741",
    storageBucket: "slack-c5741.appspot.com",
    messagingSenderId: "32895433129",
    appId: "1:32895433129:web:f73510feacd83bb1b16cb8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };