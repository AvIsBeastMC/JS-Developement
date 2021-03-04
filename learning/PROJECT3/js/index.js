let important = true;
function addAnnouncement(){
    announcement = document.getElementById('announcement');
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
        console.log("[AVMC] There are No Announcements!")
    };
}