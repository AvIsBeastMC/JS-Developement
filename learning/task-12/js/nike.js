function addNikeAirForce1() {
    console.log(`Buy Nike Air Force 1`);
    localNikeQuantity += 1;
    console.log("localNikeQuantity: " + localNikeQuantity)
    nikeBuyButton = document.getElementById('NikeAirForce1');
    nikeButton2 = document.getElementById('nike');
    errButton2 = document.getElementById('NikeAirForce1');
    buyButton = document.getElementById('paybutton')
    // Add a new document with a generated id.
    db.collection("orders").add({
        IP: `${userip}`,
        Order: { name: "Nike Air Force 1 Pair", date: Date(), quantity: localNikeQuantity }
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        db.collection("orders").doc(docRef.id)
        .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        var currentData = doc.data()
        console.log(currentData.Order.quantity)
        nike.innerHTML = `<p class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${currentData.Order.quantity}⠀ <button id="${docRef.id}" currentData="${currentData}" onclick="addQuantityNike(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
        
        </p>`
        if (document.body.contains(document.getElementById("checkout")) == false) {
            ayo.innerHTML += `
            <br><span id="checkout">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">GROCERIES, STATIONARY, FRUITS AND DRINKS AND ALSO, SHOES</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout Items</h1>
            </div>
            <h5><center>
            <button onclick="getPriceTillNow()" id="rzp-button1" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Pay</button></center></h5></span>`
        } else if (document.body.contains(document.getElementById("checkout")) == true) {
            return;
        }
        
        });
    })
    .catch((error) => {
        errButton.innerHTML = `${error}`;
        return;
    });
}
function addQuantityNike(id) {
    if (localNikeQuantity == 3) {
        return;
    }
    localNikeQuantity += 1
    console.log(id)
    db.collection("orders").doc(`${id}`).update({
        Order: { name: "Nike Air Force 1 Pair", date: Date(), quantity: localNikeQuantity }
    })
}
function nikePaymentProcess() {
    // Creating an Object for Quantity and its Prices
    var nikePriceObject = {
        one: "550",
        two: "750",
        three: "1300",
    };
    // Calculate Price for, so before Payment
    if (localNikeQuantity == 1) {
        payPrice = `${nikePriceObject.one}`;
        console.log("Quantity is 1")
    }else if (localNikeQuantity == 2) {
        payPrice = `${nikePriceObject.two}`
        console.log("Quantity is 2")
    }else if (localNikeQuantity == 3) {
        payPrice = `${nikePriceObject.three}`
        console.log("Quantity is 3")
    }
    console.log("Price to be Payed: " + payPrice)
    var options = {
        "key": "rzp_test_6J6TxvsucAJkIq", // Enter the Key ID generated from the Dashboard
        "amount": payPrice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "AvIsBeastMC",
        "description": "Nike Air Force 1 (Pair)",
        "image": "https://avmcgames.ml/servermc.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
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