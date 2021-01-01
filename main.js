var mainPrice = 500;

    mySmallDiscount = 50;

    myMediumDiscount = 100;

    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 500 - 50 = 450 

document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 500 - 100 = 400 

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 500 - 250 = 250 