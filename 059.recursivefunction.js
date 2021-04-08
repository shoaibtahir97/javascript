/*
A recursive function is one that calls itself.
Resursion is a technique for iterating over an operation by having
a function call itself repeatedly until it arrives at a result.
In some ways, recursion is similar to a loop. Both execute the same code multople times and both require a condition (to avoid an infinite loop or rather infinite recursion in this case).

A classic example of a function where recursion can be applied is the factorial.
Factorial of a number 'n' can be defined as product of all positive numbers less than or equal to 'n'
It is the multiplying sequence of numbers in a descending order till 1. It is designated by exclamation(!)
Example: factorial of 6 is  6 x 5 x 4 x 3 x 2 x 1 = 720 
*/ 

/*RECURSIVE FUNCTION EXAMPLE
In this example we have supposed n = 3 which means that we want to find out the factorial of three
1). When the function is called 3 goes in place of "n" 
2). If statement then checks if n(3) is less than 1, if it is false then else statement is executed 
3). In else statement n(3) is multiplied by the same function i.e factorial having a value less than the previous value
4). This cycle is repeated again and again until n becomes less than 1. Now the values stored in else in each iteration will
be added and the factorial of the number will be obtained
*/ 

function factorial(n) {
    if (n <= 1){
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}

//n = 3 | 3 * factorial(3-1)   => 3 * 3 = 6
//n = 2 | 2 * factorial(2-1)   => 2 * 1 = 3


var result = factorial(3);
console.log(result);
