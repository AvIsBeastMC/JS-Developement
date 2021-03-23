var mainApp = {};
(function(){
var firebase = app_firebase
    var uid = null
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid
        } else {
        // Redirect to Login Page
        uid = null
        windows.location.replace("login.html")
        }
    });
function logOut() {
    firebase.auth().signOut();   
}
<<<<<<< HEAD

init();
=======
>>>>>>> 8b9012d213a91cdc643f698e5e92267a3d1a2bd5

mainApp.logOut = logOut;
})()