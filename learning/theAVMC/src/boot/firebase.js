import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAheNZglR7Ep_CjqErAQ9CFFQZvY6fCsQQ",
  authDomain: "theavmc-db.firebaseapp.com",
  projectId: "theavmc-db",
  storageBucket: "theavmc-db.appspot.com",
  messagingSenderId: "876376577312",
  appId: "1:876376577312:web:5f3caeef371f4ef7c33345"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export default db