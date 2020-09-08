  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfh080jsijZo7pbOiLVKSvmaMZ9n4RGpk",
    authDomain: "net-ninja-marioplan-4c730.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-4c730.firebaseio.com",
    projectId: "net-ninja-marioplan-4c730",
    storageBucket: "net-ninja-marioplan-4c730.appspot.com",
    messagingSenderId: "613522942793",
    appId: "1:613522942793:web:2af7177205001037ab8898",
    measurementId: "G-VM008G4157"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;