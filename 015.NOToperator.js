
//NOT operator when placed in front of a boolean will convert it to opposite value. It means a true value will return 
//false and vice versa. This method is known as negation

alert(!true);  //false
alert(!false); //true

var a = 60;
var b = !(a < 50);
alert(b); // return true

var c = 80;
var d = !(c < 50);
alert(d); // return false


/*NOT operator when placed in front of a numeric value will convert 
it into opposite value. In JS number 0 is considered false and any
number other than 0 is considered true. NOT operator is used when we want 
to use numeric value as a boolean and perform any operation on it.
*/

alert(!1); //false
alert(!0); //true


/*DOUBLE NOT Operator when placed in front of a value will convert it to a Boolean
and negate it twice. Here 1 will be converted to boolean first and it will be true and 
then because of second ! operator it will be converted to true and vice versa with 0 */ 

alert(!!5);