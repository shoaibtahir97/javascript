/*
Array is a data structure which is a specialized format for organizing, process, retreiving and storing data.
JS array can be used in three different methods.
1). Random Access(adding or updating element anywhere in array)

2). Stack(last in first out):-
    It's a linear data structure. Insertion and deletion 
    of items takes place at one end called top of the stack.
    To make your array behave as a stack, you have to use 'push' and 'pop' function on array 
    'Push' function  will add element at the end in array
    'Pop' function will remove last element from array. 
    The element removed from array is not lost it is still 
    present in the memory and can be accessed by saving the popped element inside a variable

3). Queue(First in First out):-
    Queue is just like a line in banks. The element first added will be removed first(FIFO) 
    To make your array behave as a queue, you have to use push and shift function on array 
    'Push' function  will add element at the end in array
    'Shift' function will remove first element from array.
    */ 

//STACK Example:


var foods = [];

foods.push("Pizza");
foods.push("Burger");
foods.push("French Freies");
foods.push("Tacos");
console.log(foods);
console.log(foods.length);
var removedItem1 = foods.pop();
var removedItem2 = foods.pop();
console.log(foods);
console.log(foods.length);
console.log(removedItem1);
console.log(removedItem2);
foods.push("Biryani");
foods.push('Nihari');
console.log(foods);

//QUEUE EXAMPLE

var marks = [];

marks.push("66");
marks.push("79");
marks.push("71");
marks.push("50");

console.log(marks);

console.log(marks.length);

var a1 = marks.shift();
var a2 = marks.shift();

console.log(marks);
console.log(marks.length);
