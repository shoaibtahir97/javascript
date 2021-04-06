/*
SLice function helps to create array from element of existing 
array. It basically copies the elements and makes a new array.
We can create subset of array from existing array.
Slice takes start and end index of array to create new array.
Slice Syntax:
    a). slice(index array, end index)
    b). end index is exclusive, if you say 4 that means 3rd index
*/ 

var foods = ["Pizza", "Burger", "Snacks", "Sandwich"];

console.log(foods);//"Pizza", "Burger", "Snacks", "Sandwich"


var arr = foods.slice(1, 3);

console.console.log(foods); //Output same as above

console.log(arr); //"Burger", "Snacks"

var names = ["Ajaz", "Samina", "Shoaib", "Ramsha"];

console.log(names);

var arr = names.slice(1); //Copies all indices from 

console.log(names);//Output same as above

console.log(arr);// "Samina", "Shoaib", "Ramsha" (Copies all elements after index)



/*
SLICE FUNCTION IN STRINGS:-
Just like array slice function when applied to string will retrun 
the extracted part in a new string. 
The method takes two parameters: 
    a). start position
    b). end position
String character count starts from 0 same as arrays
*/ 

var name = "Shoaib Tahir";

var name1 = name.slice(0,6); //returns "Shoaib"

console.log(name1);

var name2 = name.slice(-6);//returns "Tahir"

console.log(name2);