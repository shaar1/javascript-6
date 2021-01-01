var mainPrice = 500,

    mySmallDiscount = 50,

    myMediumDiscount = 100,

    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 500 - 50 = 450 

document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 500 - 100 = 400 

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 500 - 250 = 250 
______________________________________________

var mainPrice = 400,

    mySmallDiscount = 50,

    myMediumDiscount = 100,

    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 400 - 50 = 350 

document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 400 - 100 = 300 

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 400 - 250 = 150 
