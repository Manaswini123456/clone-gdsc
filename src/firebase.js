import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCeUZCLkPXFrYpgd6AingUVXc3cBTxQucY",
    authDomain: "linkedin-clone-11f82.firebaseapp.com",
    projectId: "linkedin-clone-11f82",
    storageBucket: "linkedin-clone-11f82.appspot.com",
    messagingSenderId: "706977253785",
    appId: "1:706977253785:web:49e90b985c79d009976b08",
    measurementId: "G-27H7FRSD41"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth();

  export {db,auth}