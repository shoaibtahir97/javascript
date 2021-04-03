/*
charAt():- This function extract the portion of string present at that index.
It takes single index input and returns character present and that index
*/ 

var a = "To be or not to be";

var b = a.charAt(7); 
console.log(b); //returns "r"

/*
The replace() function replaces a specified value with another value in string
The replace() function does not change the string its called on. It returns a new string.
By default the replace() function replaces only the first match which it finds first.

*/ 

var str = "To be or not to be";

var b = str.replace("be", "hello");

console.log(b); //To hello or not to be



// By default the replace() function replaces only the first match which it finds first.
// To replace all matches, use a regular expression with a "/g" flag( global match) and without quotes.

var c = str.replace(/be/g, "world");

console.log(c); //returns "To world or not to world"



// To replace case sensitive words(word starting with capital), use a regular expression with an "/i" flag(insensitive)

var d = str.replace.replace(/to/i, "hello");

console.log(d); //returns "hello be or not to be" 



//You can combine both g and i falg to replace all matches and case insensitive 