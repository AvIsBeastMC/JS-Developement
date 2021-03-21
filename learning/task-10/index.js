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
                <div id="tableBeforeAllSubm">
                <tr id="yourTr" style="border-style:groove;border-color: rgb(195, 68, 122)">
                <td>${formName}</td>
                <td>${formAuthor}</td>
                <td>${formType}</td>
                <td>${submittedOn}</td>
                </tr>
                </div>`;
        let listAllSub = `<button type="button" id="butDisable" onclick="displayAllSub()" class="btn btn-info">List all Submittions</button><br>`
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
    db.collection("form1").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log("List all Submissions Button Pressed!")
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                console.log(change.doc.data());
                var objectReq1 = change.doc.data()

                tableBody = document.getElementById("tableBody");
                listAllSubm = document.getElementById("listAllSubm")
                btnDisable = document.getElementById("butDisable");
                submitPreview = document.getElementById("tableBeforeAllSubm") // Preview Table
                
                submName = objectReq1.bookName;
                submAuthor = objectReq1.bookAuthor;
                submType = objectReq1.bookType;
                submSubmittedOn = objectReq1.submittedOn;
                

                let addForm2 = `
                <td>${submName}</td>
                <td>${submAuthor}</td>
                <td>${submType}</td>
                <td>${submSubmittedOn}</td>
                </tr>`;
                // Remove Old Preview
                let previewRemoveString = `
                    <style id="sTyle">#tableBeforeAllSubm{
                    display: none;
                } 
                </style>`;
                submitPreview.innerHTML += previewRemoveString;
                console.log("Preview Table Display Removed!");
                
                tableBody.innerHTML += addForm2;

                var att = document.createAttribute("disabled");
                btnDisable.setAttributeNode(att);

            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
}







function displayAllSub2() {
    db.collection("form1").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log("List all Submissions Button Pressed!")
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                console.log(change.doc.data());
                var objectReq1 = change.doc.data()

                tableBody = document.getElementById("tableBody");
                listAllSubm = document.getElementById("listAllSubm")
                btnDisable = document.getElementById("butDisable2");
                submitPreview = document.getElementById("tableBeforeAllSubm") // Preview Table
                
                submName = objectReq1.bookName;
                submAuthor = objectReq1.bookAuthor;
                submType = objectReq1.bookType;
                submSubmittedOn = objectReq1.submittedOn;
                

                let addForm2 = `
                <td>${submName}</td>
                <td>${submAuthor}</td>
                <td>${submType}</td>
                <td>${submSubmittedOn}</td>
                </tr>`;

                tableBody.innerHTML += addForm2;
                
                var att = document.createAttribute("disabled");
                btnDisable.setAttributeNode(att);

            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
}
// NEW MISSION!
// Issue Detected! When the Form is Submitted, it is shown in the Table, but when "List all Submissions" button
// is pressed, it gets showed again because the button function triggers to list all the submissions again!
// so it also includes the latest submission too! Thereby, showing 2 records of the Same in the Table!

// FIX REQUIRED!
// Fix Idea 1: Remove the Table and Only Show It After the Form is Submitted only after the "List all Submissions" 
// button is pressed!
// -------------------------------------------------------------
// Fix Idea 2: Keep the Table, and keep the Initial Submitted Data shown in the Table that shows up in the Table after the Form is submitted
// though remove that Initial Data when "List all Submissions" button is pressed and show all the Submittions!

// // // //  FIX 2 APPROVED! // // // //