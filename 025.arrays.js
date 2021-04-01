/*
Array are used to store muliple values in a single variable. It is an ordered collection which store elements in sequence
You can store list of different types of values something like [students, cars, foodItems]
Example: String, Boolean, Number and use these values together
*/ 

// HOW TO CREATE AN ARRAY:
// 1). Array literal;

var food = ["Pizza", "Buger", "Snacks"];

/* ACCESSING ARRAY ELEMENTS
    You can access array elements by referring to the index number. First element index number is 0
*/
food[0]; //Pizza
food[1]; //Burger
food[2]; //Snacks

/*
ACCESSING FULL ARRAY
    You can acccess full array by referring its name
*/ 
console.log(food);  //Pizza, Burger, Snacks


/*
ACCESSING INDEX THAT DOES NOT EXISTS
    If you crete array  with 3 elements and try to access 4th element it will return undefined. There will be
    no error in accessing index that does not exist.
*/ 

console.log(food[0]); //Pizza
console.log(food[3]); //undefined
console.log(food[8]); //undefined


/*
CALCULATING LENGTH OF ARRAY:-
You can find out number of elements in an array by length property 
*/ 

var groups = ["PAS", "FSP", "PSP"];
console.log(groups.length); //3 elements

