/*
You can assign new element in the array by using the same method that you used to display an element in array. 
*/ 

var names = [];
console.log(names);
names[0] = "Shoaib";
names[1] = "Abdullah";
names[2] = "Bilal";
console.log(names);
console.log(names[3]); //undefined

console.log(names[2]); //Bilal

// UPDATING ELEMENT

names[2] = "Sandwhich";
console.log(names[2]);


/*ADDING NEW ELEMENTS
 1). In this method we use array index to add elements
 */

names[3] = "French Fries";
console.log(names[3]);

// 2).  In this method we use 'push' keyword to add element in array

names.push("Biryani");
alert(names[4]);

//3).  You can also add multiple elements in array

names.push("Karahi", "Nihari");
alert(names[6]);

