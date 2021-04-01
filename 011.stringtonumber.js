var age = prompt("What is your age?");  //input "5"

var num = 4;

var sum = parseInt(age) + num;

console.log(sum); // output 9

/*
'parseInt' is a keyword that convert string into  number 
'parseFloat' is a keyword that convert string into decimal
'Number' is a keyword that convert string into integer or decimal
If you put a string in input feild and use parseInt then it will be unable to convert a string into number so it will return NaN (Not a Number)
*/ 

var a = 5;

var b = "6";

var c = a + parseInt(b);