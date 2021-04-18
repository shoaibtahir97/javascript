/*
If you're creating more than one object with the same pattern of properties and methods,
it's a convenience to build the method as well as the properties into the constructor function.
In the example below, the method checks to see if the current date is in a discount
month and, if so, applies the discount. Then the method calculates the annual charge.
In the following code, the constructor creates the same method for every object that is
created, as it creates all the properties for each object.
*/ 

function Result(name, price, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMoth = currDate.getMonth;
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonth[i] === thisMoth) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice *12;
    }

}

/*
Things to notice about line 16
1). just like above properties the function is placed inside the variable of the constructor
2). the parameter inside the function is that of the method and not of the constructor
*/ 


var plan1 = Result("Basic", 3.99, 100, 10, [6, 8, 10]);
// This is the code that calls the constructor function to create a new object.


var total = plan1.calcAnnual(0.5);
//Once the objects and their properties and method are created by
//the code above, this is the code that calls the method 

/*
The main difference between the method definition in the object definition without
constructor and the method definition in the constructor function is the first line. 
In otherrespects, both definitions are identical.


This is the first line of a method definition when an object is created on a one-off basis
without a constructor:

calcAnnual: function(percentIfDisc) {


This is the first line of a method definition within a constructor:

this.calcAnnual = function(percentIfDisc) {
*/ 