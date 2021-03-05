// Commit 1
// Put Important to true
let important = true; 
// Just Checkin
function addAnnouncement(){
    announcement = document.getElementById('announcement');
    // announcementOp = dbRef.on('value', snap => bigOne.innerText = snap.val()); 
    if (important == true){
    console.log("[AVMC] Displaying Announcements!...");
    let headerStr = `<div class="alert alert-success" role="alert">
                     <h4 class="alert-heading">Important Note!</h4>
                     <p>AVMC has Been Shut Down for a Limited Period of Time to due to Mismanagement and 
                     Shortages of Time of the Admin to Work on it, and due to some more similar reasons, 
                     check out <a href="https://discord.playavmcgames.ml/" target="_blank">our Discord</a> for more information if required..
                     </p>
                     <hr>
                     <p class="mb-0"> You may also Attach the Book PDF (Under Development)</p>`;
    announcement.innerHTML += headerStr;
    } else if (important == false){
        console.log("[AVMC] There are No Announcements!");
    };
}
// MainJS
let currentProject = 'AVMC';
// Function to Show Current Project in the Nav Link
function addCurrentProject(){
    let currentProjectHandler = document.getElementById('currentProject');
    console.log("[AVMC] Current Project on Work is " + currentProject);
    let addCurrentProjectStr = `${currentProject}`;
    currentProjectHandler.innerHTML += addCurrentProjectStr;
    if(currentProjectHandler.value == currentProject){
        return;
    }
}