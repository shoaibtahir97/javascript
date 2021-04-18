/*

*/ 

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7]
};

var plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    transfer: 5000,
    pages: 50,
    discountMonths: [6, 7, 11]
};

var plan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 20000,
    pages: 500,
    discountMonths: [6, 7]
};

function calcAnnual() {
    var bestPrice = plan1.price;  //save the value of price in side a variable
    var currDate = new Date();   //get todays date 
    var thisMonth = currDate.getMonth(); //get the month of todays date
    for(var i = 0; i < plan1.discountMonths; i++) { // the for loop inside the function cycles through all the discount months checking to see if any of them happen to be the current month. 
        if (plan1.discountMonths[i] === thisMonth) {//If the current month is the discountMonth
            bestPrice = plan1.price * .8;//then it calculates a 20% discount by multiplying the regular price by .8
            break;
        }
    }
    return bestPrice * 12; //Multiply the monthly price by 12 to get the annual price.
}

var totalamount = calcAnnual(); //and return the total amount to calling function, which is saved inside a variable.

/* let's make the function more flexible so the discount rate can vary, depending on
the value that the calling statement passes to it. Here's the revision, with the percentage to be
charged, passed to the parameter percentIfDisc, if the user qualifies for a discount.
*/

function calcYearly(discOffer) {
    var topPrice = plan3.price;
    var todaysDate = new Date();
    var thisMo = todaysDate.getMonth();
    for (var i = 0; i < plan3.discountMonths; i++) {
        if (plan3.discountMonths === thisMo) {
            topPrice = plan3.price * discOffer 
            break;
        }
    }
    return bestPrice * 12;
} 

var annualPrice = calcYearly(0.85)

/*
When you attach a function as a property of the object its called a method
It does the same task the normal function does but now its  attached to an 
objet
*/ 


var plan4 = {
    name: "Premium",
    price: 7.99,
    space: 1000,
    transfer: 3000,
    pages: 100,
    discountMonths: [2, 4, 6, 8, 10],
    calcYearly: function (discOffer) {
        var topPrice = plan3.price;
        var todaysDate = new Date();
        var thisMo = todaysDate.getMonth();
        for (var i = 0; i < plan3.discountMonths; i++) {
            if (plan3.discountMonths === thisMo) {
                topPrice = plan3.price * discOffer 
                break;
            }
        }
        return bestPrice * 12;
    } 
};

/*
The properties of the object are referred as "plan1.price". This works but a 
better approach is to replace the name of object with the keyword "this". When JS
sees this keyword it knows your'e referring to the object thats being defined,
in this case plan5.
*/ 

var plan5 = {
    name: "Extreme",
    price: 3.99,
    space: 100,
    transfer: 100,
    pages: 10,
    discountMonths: [6, 7, 9],
    calcAnnual: function(percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var currMonth = currDate.getMonth;
        for (var i = 0; i < this.discountMonths; i++) {
            if (this.discountMonths[i] === currMonth) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};

calcAnnual(0.5);
