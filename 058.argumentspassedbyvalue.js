/*
ARGUMENTS PASSED BY VALUE:-
Whenever you pass values in functions, the function can change those values
but the variable whose values are passed in the function their value is changed or not
depends on the variable weather it is passed as value or as reference.
Every variable's value is passed by value i.e all the primitive data types like number, string, boolean etc
The variable original value is not changed if it is passed by value. The value of the variable is 
changed only at the point where it is used in the function
*/ 

var num = 5; //

function changeValue(a) { //function with a parameter "a"
    console.log( " Num before "+ num);
    a = 7;   //created the variable "a"
    console.log( " Num after "+ num);

}

changeValue(num); //here function is called and "num" variable with the value 5 is passed in the parameter "a" of function 

console.log(num); //5, num will be updated

//When we called the "num" variable it was not passed directly but the value of "num" i.e 5 was passed



/*
ARGUMENTS PASSED BY REFERENCE:-
If you pass arguments of non-primitive data types (i.e arary, object) in function and if the function does any manipulation
in the value then the result will be observed in the original variable and outside the function
*/ 

var arr =[4, 6, 7, 9];

function updateArray(val) { //array received in val 
    val[1] = 57; //updating val will also update arr
}

console.log(arr[1]); //returns 6 before calling function

updateArray(arr);

console.log(arr[1]) //returns 57 after calling function

