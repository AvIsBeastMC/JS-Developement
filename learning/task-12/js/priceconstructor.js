localNikeQuantity = 0;
localMHQuantity = 0;
function getPriceTillNow() {
    console.log(localNikeQuantity)
    console.log(localMHQuantity)
    // Creating an Object for Quantity and its Prices
    var nikePriceObject = {
        one: 550,
        two: 750,
        three: 1300,
    };
    // Calculate Price for, so before Payment
    if (localNikeQuantity == 0) {
        payPrice = 0;
    }
    if (localNikeQuantity == 1) {
        payPrice = nikePriceObject.one;
    }else if (localNikeQuantity == 2) {
        payPrice = nikePriceObject.two
    }else if (localNikeQuantity == 3) {
        payPrice = nikePriceObject.three
    }
    // Creating an Object for Quantity and its Prices
    var priceObject = {
        one: 250,
        two: 500,
        three: 750,
      };
    // Calculate Price for, so before Payment
    if (localMHQuantity == 0) {
        MHpayPrice = 0;
    }
    if (localMHQuantity == 1) {
        MHpayPrice = priceObject.one;
    }else if (localMHQuantity == 2) {
        MHpayPrice = priceObject.two
    }else if (localMHQuantity == 3) {
        MHpayPrice = priceObject.three
    }
    console.log("Price of Nike: " + payPrice)
    console.log("Price of MH: " + MHpayPrice)
    let totalCost = payPrice + MHpayPrice
    console.log("Price to be Payed Totally: " + "Rs. " + totalCost);
    // Get Description for Summary of Items Purchased!
    if (localNikeQuantity !== 0) {
        sumDescription = "Nike Air Force 1"
    } else if (localNikeQuantity == 0) {
        sumDescription = "";
    }
    if (localMHQuantity !== 0) {
        sumDescription += " | Mporis Hotgel Blue Ball Pen (100 P.)"
    } else if (localMHQuantity == 0) {
        sumDescription += "";
    }
    console.log(sumDescription)
    var options = {
        "key": "rzp_test_6J6TxvsucAJkIq", // Enter the Key ID generated from the Dashboard
        "amount": totalCost*100, // Amount is i n currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "AVMC Shopping",
        "description": `${sumDescription}`,
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