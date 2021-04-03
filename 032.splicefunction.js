/*
To add element in array we used following functions: 
1). Push  = add element in last
2). Unshift = add element in start
3). Index = add element in last or replace existing element

If we want to add one or more element in middle of array or any particular index other than first/last then we can use splice function.
Splice function can replace one or more element on particular index in array and moves the next element forward. 
Splice function returns elements which are removed from array, if no element removed than returns empty array
*/ 

var foods = ["Pizza", "Burger", "Sandwich"];

console.log(foods); //"Pizza", "Burger", "Sandwich"

foods.splice(1, 0, "Snacks"); //1 => index where you want to add new value(Snacks) ; 0 => How many elements to replace/remove after the value
           
console.log("Pizza"); //"Pizza", "Snacks", "Burger", "Sandwich"


var names = ["Ajaz", "Samina", "Shoaib", "Ramsha"];

console.log(names);

var removedElements = names.splice(3, 1, "Sarah");

console.log(names);

console.log(removedElements)