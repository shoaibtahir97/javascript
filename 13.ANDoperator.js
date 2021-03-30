/*
Logical Operators are used to determine logic between two values. They require boolean operands on both sides of operators 
It is used to check the range between values. Its examples are ||(OR), &&(AND), !(NOT).
*/ 

//AND operator compares between two boolean values. If both the values are same i.e true than only the result will be true
//otherwise if any one value is different than the result will be false.

alert( true && true ) ; //true
alert( false && true ) ; //false
alert( true && false ) ; //false
alert( false && false ) ; //false

var a = 60;
var b = a > 50 && a < 70 && a === 60; //both values are true thats why end result is true
alert(b) //true


var c = 80;
var e = c > 50 && c < 70; //first value is true but second value is false so end result is false
alert(c); //false



