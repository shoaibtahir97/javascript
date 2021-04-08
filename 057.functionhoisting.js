/*
JS has a default behavior of hoisting i.e moving declaration to the top of the
current scope.
Hoisting applies to variable and function declarations
Because of this, functions can be called before they are declared
*/ 

//FUNCTION HOISTING
var total = sum(5, 6);

console.log("Sum = " + total);

function sum(a, b) { //declaration
    return a + b;
}  

/*
VARIABLE HOISTING
Variable hoisting is different from that of function hoisting
In variable hoisting when you declare and initialize a variable and then call that variable at the top 
it will return undefined because only the declaration of variable is hoisted at the top line not the initalized value 
thats why when we console the variable at the top it will return undefined and when the same variable is consoled 
after its initialization it will give you the value saved in the variable.
*/
var a; //declaration

console.log("A Before =  " + a); //undefined
 
var a = 6; //initialization

console.log("A After =  " + a); //a = 6

/*FUNCTION EXPRESSION HOISTING
When we hoist a function it is available at the top scope but in case of fnction expression
the function is stored in a variable so when we call the function expression before its declaration
it will result in error because the funciton expression that is called is called as an undefined valriable and
the function is not made 
*/

sum();

var add = sum(3, 4);

console.log(add); //here it will give an error that sum is not a function because it's called here as a variable

var sum = function(a, b) {
    return a + b;
}

