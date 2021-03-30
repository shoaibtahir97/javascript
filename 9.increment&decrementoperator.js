var a = 6;
--a;  //5
a++;  //6
a--;  //5

console.log(a);

var b = 10;
var c = b++; // first value of b comes in 'c' and then addition of 'b' occurs  

console.log(b);//11
console.log(c);//10


var d = 5;
var e = ++d //first the value of d comes in e in added form and then goes back to its original form as added one.
   
console.log(d);//6
console.log(e);//6

var f = ++d - --e + c-- * b++
    //   7  -  5  + 10  * 11
console.log(f);


/*
Urinary Operator
to add or substract a variable by a single digit we use (++)or (--). 
They can only be used on a single variable. 
*/ 

var age = 12;

age++