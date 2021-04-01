/*
To add element in array we use push function or index
These will add element at end of array. 
If you want to add element at the start of array 
and move all element one index ahead we can use unshift function 
*/ 

var schools = [];

schools.push("Patrick");
schools.push("Paul");
schools.push("BVS");
schools.push("Government");

console.log(schools);

console.log(schools.length);

console.log(schools[0]);

schools.unshift("Army Public School");

console.log(schools[0]);

console.log(schools[1]);