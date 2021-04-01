
// Creating Seperate Functions for Each Item Onclick
function addMporisHotgel100() {
    console.log(`Buy Mporis Hotgel`);
    localMHQuantity += 1;
    console.log("localMHQuantity: " + localMHQuantity)
    buyButton = document.getElementById('MporisHotgel100');
    mporisButton2 = document.getElementById('mporishotgel');
    errButton = document.getElementById('MporisHotgel100');
    buyButton = document.getElementById('paybutton')
    // Add a new document with a generated id.
    db.collection("orders").add({
        IP: `${userip}`,
        Order: { name: "Mporis Hotgel Blue Ball Pen (100 P.)", date: Date(), quantity: localMHQuantity }
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        db.collection("orders").doc(docRef.id)
        .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        var currentData = doc.data()
        console.log(currentData.Order.quantity)
        mporisButton2.innerHTML = `<p class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${currentData.Order.quantity}⠀ <button id="${docRef.id}" currentData="${currentData}" onclick="addQuantityMH(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
        
        </p>`
        paybutton.innerHTML = `<h5><center>
        <button onclick="getPriceTillNow()" id="rzp-button1" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Pay</button></center></h5>`
        });
    })
    .catch((error) => {
        errButton.innerHTML = `${error}`;
        return;
    });
}
function addKashmiriApples() {
    console.log(`Buy Kashmiri Apples`)
}
// Add More Quantity
function addQuantityMH(id) {
    if (localMHQuantity == 3) {
        return;
    }
    localMHQuantity += 1
    console.log(id)
    db.collection("orders").doc(`${id}`).update({
        Order: { name: "Mporis Hotgel Blue Ball Pen (100 P.)", date: Date(), quantity: localMHQuantity }
    })
}
function paymentProcess() {
    // Creating an Object for Quantity and its Prices
    var priceObject = {
        one: "250",
        two: "500",
        three: "750",
      };
    // Calculate Price for, so before Payment
    if (localMHQuantity == 1) {
        payPrice = `${priceObject.one}`;
        console.log("Quantity is 1")
    }else if (localMHQuantity == 2) {
        payPrice = `${priceObject.two}`
        console.log("Quantity is 2")
    }else if (localMHQuantity == 3) {
        payPrice = `${priceObject.three}`
        console.log("Quantity is 3")
    }
    console.log("Price to be Payed: " + payPrice)
    var options = {
        "key": "rzp_test_6J6TxvsucAJkIq", // Enter the Key ID generated from the Dashboard
        "amount": payPrice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "AvIsBeastMC",
        "description": "Mporis Hotgel Blue Ball Pen (20x5 Boxes)",
        "image": "https://avmcgames.ml/servermc.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var propay = new Razorpay(options);
    propay.open()
}