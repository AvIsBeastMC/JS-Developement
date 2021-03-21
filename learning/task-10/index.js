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
                // Populate the Table
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
function submitForm() {
    let formName = document.getElementById('bookName').value
    let formAuthor = document.getElementById('bookAuthor').value
    let formType = document.getElementById('bookType').value
    let submittedOn = Date()
    // Add a new document with a generated id.
    db.collection("form1").add({
        bookName: formName,
        bookAuthor: formAuthor,
        bookType: formType,
        submittedOn: submittedOn,
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    // Display the Submittion to Table
    console.log('Adding to Table');
        tableBody = document.getElementById("tableBody");
        listAllSubm = document.getElementById("listAllSubm")
        // For Populating the Table!
        let addForm = `
                <td>${formName}</td>
                <td>${formAuthor}</td>
                <td>${formType}</td>
                <td>${submittedOn}</td>
                </tr>`;
        let listAllSub = `<button type="button" onclick="displayAllSub()" class="btn btn-info">List all Submittions</button><br>`
        tableBody.innerHTML += addForm;        
        listAllSubm.innerHTML += listAllSub
        // For Adding an InnerHTML Alert!
        bodyAlert = document.getElementById("message");
        let divopString = `<div class="alert alert-success" role="alert">
                           <h4 class="alert-heading">Well done!</h4>
                           <p>You Have Successfully Submitted a Book <b>"${formName}"</b>, <b>${formAuthor}</b> based on <b>${formType}</b>! and you may see it in the Books Table below!</p>
                           <hr>
                           <p class="mb-0"> You may also Attach the Book PDF (Under Development)</p>`
        bodyAlert.innerHTML += divopString;
        // Removing Form for Spam Protection and One Book Submittion at a Time!
        formRemove = document.getElementById("formremove");
        let formRemoveString = `<style>#form{
            display: none;
        }</style>`;
        formRemove.innerHTML += formRemoveString;
        console.log("Form Display Removed!");
}
function displayAllSub() {
    
}