import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyDZ1lxgzAOIHMLfPBBVymLe6Se5Jkd2eRs",
    authDomain: "vuecli-firebase.firebaseapp.com",
    projectId: "vuecli-firebase",
    storageBucket: "vuecli-firebase.appspot.com",
    messagingSenderId: "1011079889228",
    appId: "1:1011079889228:web:9c4b5b596877cc349a4fe9",
    measurementId: "G-674C2BRZ5N"
  };
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');
console.log("lmao")