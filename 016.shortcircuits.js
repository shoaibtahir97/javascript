/* 
&& and || operator stops evaluation of expression once they
find desired value. 
&& stops evaluation as soon as it finds false and returns false.
&& returns true if all values are true.
|| stops evaluation as soon as it finds true and returns true.
|| returns false if all values are false
*/

var score = 40;
        // false       //true       //false
var a = score > 50 && score < 70 && score === 66;

console.log(a); //false


//All these operators are used in if else statements to check the conditions 