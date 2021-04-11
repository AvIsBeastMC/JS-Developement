function getItem() {
    console.log(event.toElement.id);
    localNikeQuantity = 0;
    localMHQuantity = 0;
    localKashmiriQuantity = 0;
    if (event.toElement.id == "KashmiriApple") {
        kashmiriApples = document.getElementById('kashmiriapples');
        localKashmiriQuantity += 1;
        // Add a new document with a generated id.
        db.collection("orders").add({
        IP: `${userip}`,
        Order: { name: "Fresh Kashmiri Apples (1 KGs)", date: Date(), quantity: localKashmiriQuantity }
        })
        .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
        db.collection("orders").doc(docRef.id)
        .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        var currentData = doc.data()
        console.log(currentData.Order.quantity)
        kashmiriApples.innerHTML = `<p id="appleQuantity" class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${currentData.Order.quantity}⠀ <button id="${docRef.id}" onclick="addQuantityKM(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
        </p>`
        if (document.body.contains(document.getElementById("checkout")) == false) {
            ayo.innerHTML += `
            <br><span id="checkout">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">GROCERIES, STATIONARY, FRUITS AND DRINKS AND ALSO, SHOES</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout Items</h1>
            
                  <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item Name</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item Quantity</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item Price</th>
                </tr>
              </thead>
              <tbody id="checkoutTBody">
              <tr id="${docRef.id}2">
                <td class="px-4 py-3">Fresh Kashmiri Apples</td>
                <td class="px-4 py-3">1</td>
                <td class="px-4 py-3">₹550</td>
              </tr>
              </tbody>
            </table><br>
            <h5><center>
            <button id="rzp-button1" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Pay</button></center></h5></span></div>`
        } else if (document.body.contains(document.getElementById("checkout")) == true) {
            tableBody = document.getElementById('checkoutTBody');
            tableBody.innerHTML += `
                                    <tr id="${docRef.id}2">
                                    <td class="px-4 py-3">Fresh Kashmiri Apples</td>
                                    <td class="px-4 py-3">1</td>
                                    <td class="px-4 py-3">₹550</td>
                                    </tr>`
        }
        });
    })
    } // 
else if (event.toElement.id == "nikeairforce") {
        nikeAirForce = document.getElementById('nike');
        localNikeQuantity += 1;
        // Add a new document with a generated id.
        db.collection("orders").add({
        IP: `${userip}`,
        Order: { name: "Nike Air Force 1", date: Date(), quantity: localNikeQuantity }
        })
        .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
        db.collection("orders").doc(docRef.id)
        .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        var currentData = doc.data()
        console.log(currentData.Order.quantity)
        nikeAirForce.innerHTML = `<p id="nikeQuantity" class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${currentData.Order.quantity}⠀ <button id="${docRef.id}" onclick="addQuantityNike1(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
        </p>`
        if (document.body.contains(document.getElementById("checkout")) == false) {
            ayo.innerHTML += `
            <br><span id="checkout">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">GROCERIES, STATIONARY, FRUITS AND DRINKS AND ALSO, SHOES</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout Items</h1>
            
                  <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item Name</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item Quantity</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item Price</th>
                </tr>
              </thead>
              <tbody id="checkoutTBody">
              <tr id="${docRef.id}2">
                <td class="px-4 py-3">Fresh Kashmiri Apples</td>
                <td class="px-4 py-3">1</td>
                <td class="px-4 py-3">₹550</td>
              </tr>
              </tbody>
            </table><br>
            <h5><center>
            <button id="rzp-button1" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Pay</button></center></h5></span></div>`
        } else if (document.body.contains(document.getElementById("checkout")) == true) {
            tableBody = document.getElementById('checkoutTBody');
            if (document.body.contains(document.getElementById(`${docRef.id}2`)) == false) {
                tableBody.innerHTML += `
                                        <tr id="${docRef.id}2">
                                        <td class="px-4 py-3">Nike Air Force 1</td>
                                        <td class="px-4 py-3">1</td>
                                        <td class="px-4 py-3">₹550</td>
                                        </tr>`
            } else if (document.body.contains(document.getElementById(`${docRef.id}2`)) == true){
                return;
            } 
        }
    });
})
} // 
}
function addQuantityKM(id) {
    kashApple = document.getElementById("appleQuantity");
    checkoutTBody = document.getElementById("checkoutTBody");
    if (localKashmiriQuantity == 3) {
        return
    }
    else if (localKashmiriQuantity !== 3) {
        localKashmiriQuantity += 1;
    }
    console.log(id);
    console.log("Kashmiri Order");
    console.log("Kashmiri Quantity: " + localKashmiriQuantity)
    db.collection("orders").doc(`${id}`).update({
        Order: { name: "Fresh Kashmiri Apples (1 KGs)", date: Date(), quantity: localKashmiriQuantity }
    })
    kashApple.innerHTML = `<p id="appleQuantity" class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${localKashmiriQuantity}⠀ <button id="${id}" onclick="addQuantityKM(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
    </p>`
    // Calculate Prices
    var KHPriceObject = {
        one: 550,
        two: 750,
        three: 1300,
    };
    // Calculate Price for, so before Payment
    if (localKashmiriQuantity == 1) {
        KHpayPrice = KHPriceObject.one;
    }else if (localKashmiriQuantity == 2) {
        KHpayPrice = KHPriceObject.two
    }else if (localKashmiriQuantity == 3) {
        KHpayPrice = KHPriceObject.three
    }
    console.log(`Kashmiri Apples Price: ${KHpayPrice}`)
    // Table
    if (document.body.contains(document.getElementById(`${id}2`)) == false) {
    console.log("table row for this didn't exist, executed and created one")
    checkoutTBody.innerHTML += `
    <tr id="${id}2">
        <td class="px-4 py-3">Fresh Kashmiri Apples</td>
        <td class="px-4 py-3">${localKashmiriQuantity}</td>
        <td class="px-4 py-3">₹${KHpayPrice}</td>
    </tr>`
    // kashmiriApples.innerHTML = `<p class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${localKashmiriQuantity}⠀ <button id="${id}" onclick="addQuantityKM(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
    // </p>`
    } else if (document.body.contains(document.getElementById(`${id}2`)) == true) {
        tRowExists = document.getElementById(`${id}2`);
        console.log("tRowExists" + tRowExists.innerHTML);
        tRowExists.innerHTML = `
        <td class="px-4 py-3">Fresh Kashmiri Apples</td>
        <td class="px-4 py-3">${localKashmiriQuantity}</td>
        <td class="px-4 py-3">₹${KHpayPrice}</td>`
    }
}
function addQuantityNike1(id) {
    nike = document.getElementById("nikeQuantity");
    checkoutTBody = document.getElementById("checkoutTBody");
    if (localNikeQuantity == 3) {
        return
    }
    else if (localKashmiriQuantity !== 3) {
        localKashmiriQuantity += 1;
    }
    console.log(id);
    console.log("Nike Order");
    console.log("Nike Quantity: " + localNikeQuantity)
    db.collection("orders").doc(`${id}`).update({
        Order: { name: "Nike Air Force 1", date: Date(), quantity: localNikeQuantity }
    })
    nike.innerHTML = `<p id="nikeQuantity" class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${localNikeQuantity}⠀ <button id="${id}" onclick="addQuantityNike1(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
    </p>`
    // Calculate Prices
    var NikePriceObject = {
        one: 550,
        two: 750,
        three: 1300,
    };
    // Calculate Price for, so before Payment
    if (localNikeQuantity == 1) {
        nikePayPrice = NikePriceObject.one;
    }else if (localNikeQuantity == 2) {
        nikePayPrice = NikePriceObject.two
    }else if (localNikeQuantity == 3) {
        nikePayPrice = NikePriceObject.three
    }
    console.log(`Nike Price: ${nikePayPrice}`)
    // Table
    if (document.body.contains(document.getElementById(`${id}2`)) == false) {
    checkoutTBody.innerHTML += `
    <tr id="${id}2">
        <td class="px-4 py-3">Nike Air Force 1</td>
        <td class="px-4 py-3">${localNikeQuantity}</td>
        <td class="px-4 py-3">₹${nikePayPrice}</td>
    </tr>`
    // kashmiriApples.innerHTML = `<p class="text-500 inline-flex items-center md:mb-2 lg:mb-0"><img src="https://img.icons8.com/plasticine/28/000000/shopping-cart-loaded.png"/>⠀Quantity:  ${localKashmiriQuantity}⠀ <button id="${id}" onclick="addQuantityKM(id)"><img src="https://img.icons8.com/emoji/21/000000/plus-emoji.png"/></button>
    // </p>`
    } else if (document.body.contains(document.getElementById(`${id}2`)) == true) {
        tRowExists = document.getElementById(`${id}2`);
        console.log("tRowExists" + tRowExists.innerHTML);
        tRowExists.innerHTML = `
        <td class="px-4 py-3">Nike Air Force 1</td>
        <td class="px-4 py-3">${localNikeQuantity}</td>
        <td class="px-4 py-3">₹${nikePayPrice}</td>`
    }
}