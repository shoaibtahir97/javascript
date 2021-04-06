/*
variables can have local or global scope
a global variable is one thats declared in the main body of your code
not inside a function
A local variable is one thats declared inside a function 
A local variable can be either a parameter of the function, which
is declared implicitly by being named as a parameter or a
variable declared explicitly in the function with the var keyword
We can use global variables inside or outside functions and can manipulate the value 

*/ 


/*EXAMPLE - 1


*/ 
var a = 7;  //global variable

function sum() {
    var b = 6;  //local variable
    
    a = b + 5; // local variable

    console.log(a); //uptil now the function is declared so the value of "a" here is going to be the global variable
                    //and not the value of local variable 
}

sum();

consol.log(a); //here the sum function is called and executed so when we console the value of "a" it is going to be the updated value of
               //present in the function


/*EXAMPLE - 2
This example is same as previous but the difference is that variable "d" is
not assigned outside the function thats why when we console "d" so it will give an error that b is not available outside sum function  
*/
var c = 8;

function multiply() {
    var d = 9;
    c = d + 5;
}

sum();
console.log(d);

/*EXAMPLE - 3
In this example we have declared a in global scope and in function we are again
creating a variable with the same name. In the function the variable created inside function will be used and
the variable outside the function will not be used. If you console the variable outside the function you will get 
the value of the variable which is present inside global scope in unchanged form 
*/ 

var a = 7; //global

function sum() {  
    var a = 6;   //lobal variable "a" with same name as global variable
    
    a = 3 + 2; //lobal "a" variable will be used and not the global variable
    
    console.log(a); //returns 5
}

sum();

console.log(a); //returns 7


/*
GLOBAL VARIABLES WITHOUT "VAR" KEYWORD
If you create a variable without var keyword it will be global
variable no matter where you have created it.
Varaible created without var inside a function is also a global
variable.
Variable created without var in main body will be global variable
It is recommended to use variable with var keyword to have defined context 
*/ 

var a = 7;

function sum() {
    b = 7;
    a = b +1;
}


console.log("A Before fn call" + a);

console.log("B before fn call" + b); //Here b is in console before function is called so it will give an error

sum();

console.log("A after fn" + a);

console.log("B after fn" + b); 


