

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBsshapwCrhFPP3FxWs0LVgIBs7E_fvr3c",
        authDomain: "todo-app-cp-bd758.firebaseapp.com",
        projectId: "todo-app-cp-bd758",
        storageBucket: "todo-app-cp-bd758.appspot.com",
        messagingSenderId: "1072018918293",
        appId: "1:1072018918293:web:a9afa6bb0646462e86449c",
        measurementId: "G-EN6WL1CF61"
    

  });

  const db = firebaseApp.firestore();

  export default db;