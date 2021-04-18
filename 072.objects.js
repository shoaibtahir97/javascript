/*
Suppose you have a web hosting provider that has different packages
If you wanted to use its data in Javascript, you had to assign each
value to a different variable, which could be troublesome. 
A better approach is to create object with properties.

In the example present in book each hosting plan is a object with name
plan1, plan2, plan3. 
Each object has  5 properties name, price, space, transfer and pages

Properties are just variables that are attached to an object.
In this case each object has a string property (name) and 
four number properties(price, space, transfer and pages).

In code we refer to objects and their properties using dot notation.
*/ 

/*
CREATING AN OBJECT
The code begins like any variable definition, with the keyword var, followed by the object name, and then an equal sign.
But then, instead of a value, there's a curly bracket, whose twin comes at the end of the block.
Each property begins with a name, followed by a colon, and then a value.
Each property definition except the last ends with a comma.
The closing curly bracket is followed by a semicolon, because of the equal sign in the
first line
*/

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};

var plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    transfer: 5000,
    pages: 50,
};

var pan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 2000,
    transfer: 20000,
    pages: 500,
};

/*
ADDING ANOTHER PROPERTY IN THE OBJECT
You can add more properties to the object.
The statement below creates a new property(discountMonths) of the object plan1,
This property is an array. You can refer to the element in the array same as you would 
in a normal array. The example is the second statement below
*/ 
plan1.discountMonths =[3, 7, 11];

var month = plan1.discountMonths[1];

var package = prompt("Which plan would you like ?");
if (package === plan1.name) {
    alert("The cost of " + plan1.name + " package is $ "+ plan1.price + " per month.");
}
