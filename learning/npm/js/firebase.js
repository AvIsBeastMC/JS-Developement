// Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCoAEx0EdRD-VfONWqc-TEVKqo8ECu0DZw",
        authDomain: "learning-db1.firebaseapp.com",
        projectId: "learning-db-1",
        storageBucket: "learning-db1.appspot.com",
        messagingSenderId: "541085478008",
        appId: "1:541085478008:web:8809935ba8fe671461518d",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      var storage = firebase.storage();