console.log("ayo");
var db = firebase.firestore();
// Create a New Document in form1 collection

// db.collection("form1").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
// Listen for Changes Realtime
theForm = document.getElementById('tableBody')
db.collection("form1").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            let qweetChange = change.doc.data()
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                var objectReq = change.doc.data()
                console.log(objectReq.bookName)
                // Plan is to Get the First Value in array[0], and the Second Seperately
                // than can be stored in a Variable 
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });