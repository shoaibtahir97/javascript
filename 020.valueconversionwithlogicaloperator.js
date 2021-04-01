/*
Value conversion also works with logical operators (&& and ||).
FOR && :
a. If all values are converted to true, it will return last value.
b. If any of the value is converted to false, it will be returned.

Examples:
/**/ 

var a1 = 'Cat' && 'Dog' //returns Dog
var a2 = false && 'Cat'; //returns false
var a3 = '' && false; //returns ""
var a4 = 0 && 1; //returns 0;


/*

FOR ||:
a. If any value converted to true it will return that value
b. If all values are converted to false, it will return last value


You can use non-boolean values like (string, number)
"Hello" && 65;
"World" || 40;
The result of this comparision depend on the value which is true.
Eample:  "Hello" && "";
Here you can see that first value is true and empty string is false.


*/ 
