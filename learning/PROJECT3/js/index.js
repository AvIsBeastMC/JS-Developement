function addHeader(){
header = document.getElementById('headop');
console.log("Adding Header");
let headerStr = `<div class="alert alert-success" role="alert">
                 <h4 class="alert-heading">Well done!</h4>
                 <p>You have Successfully added your First Element of Header!</p>
                 <hr>
                 <p class="mb-0"> You may also Attach the Book PDF (Under Development)</p>`;
header.innerHTML += headerStr;
}