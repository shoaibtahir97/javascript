/*
The split() function is used to split a string into an array of substring, 
and returns the new array. 
Inside the split function's parenthesis you have to give inverted comma 
and inside of it you need to give the sign from which the words are to be seperated.
In this case we have given space inside inverted comma which designates that where spaces are present 
break the string from there and make an array.
Apart from space you can use any sign like  ",", "|", which is presnt inside the string. 
If you wont give any space then it will make an array of all the characters present inside the string
*/ 


var str = "To,be or|not to,be";

var b = str.split(" ")

var c = str.split(",");

var d = str.split("|")

console.log(b); // ["To", "be or|not to", "be"]
console.log(c); // ["To", "be or|not to", "be"]
console.log(d); // ["To be or", "not to be"]
