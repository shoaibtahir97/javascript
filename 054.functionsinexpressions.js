/*
The function output can also be used in expressions for calculation
Here we have given an argument and returned the function,
As we know that expressions are executed left to right so first the arguments will be passed in the function
and then the result of the function will perform calculation with the expression.
*/ 


//EXAMPLE - 01

function multiply(num1, num2) {
    return num1 * num2
}

var a = multiply(3, 4) + 5; // This is an expression

/*EXAMPLE - 02
First "sum" function is called and the input values are assigned in a and b
then inside sum function divide function is called and it also accepts two arguments that are a and b
both the parameters have 3 & 4 values. so the value goes in divide function parameters num1 and num2 
the result is returned in sum function and then the result is added with the value of b which is 4
In the last total variable will executed and the result of sum will be added with 6; 
*/


function divide(num1, num2) {
    return num1 / num2
}

function sum(a, b) {

    return divide(a, b) + b;
}

var total = sum(3, 4) + 6;


/*EXAMPLE - 02
Everything is same as previous example but the difference is that the multiply function is called inside 
the argument of sum. 

*/


function multiply(num1, num2) {
    return num1 * num2;
}

function sum(a, b) {
    return a + b;
}

var total = sum(multiply(3, 4), 2) + 6;