//OR operator is used with two or more values, but it evaluates true if any of the operands(values) are true. 
//So it only evaluates to false if both operands are false.

alert( true || true ) ; //true
alert( false || true ) ; //true
alert( true || false ) ; //true
alert( false || false ) ; //false


var s = 60;
var b = a < 50 || a > 70;
alert (b); //false


var s = 80;
var b = a < 50 || a > 70;
alert (b); //true
