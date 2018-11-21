import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDXubahLbFvR4pGbxQ6PHSOLfvUZ2A4Keo",
    authDomain: "net-ninja-marioplan-c6e8e.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-c6e8e.firebaseio.com",
    projectId: "net-ninja-marioplan-c6e8e",
    storageBucket: "net-ninja-marioplan-c6e8e.appspot.com",
    messagingSenderId: "378312264096"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots :true});

  export default firebase;      