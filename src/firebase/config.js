import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCGdRUNnvV5aqoSj47xZZ1uWtjWQnxHgug",
    authDomain: "msc-list.firebaseapp.com",
    projectId: "msc-list",
    storageBucket: "msc-list.appspot.com",
    messagingSenderId: "11799563208",
    appId: "1:11799563208:web:bfa9251fb1562c7b890efd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
