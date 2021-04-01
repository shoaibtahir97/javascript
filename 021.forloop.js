/*
Looping facilitates the execution of a set of instructions repeatedly 
when some conditions evaluated to true. The for statement creates a 
loop that is executed as long as a condition is true. 
It will only stop when the condition becomes false.

HOW TO MAKE A LOOP:-

for (initialization; condition; expression) {
    //code to be executed /iteration
}
1). initialization => initialize a variable
2). condition => condition which could be true or false. If true then loop 
    continues, if false then loop is stopped.
3). expression => any expression that continues until the condition in 
    the loop becomes false. 

*/ 

for (var i = 0; i < 5; i++) {
    // console.log(i);
}

for (var i = 10; i > 0; i--) {
    // console.log(i);
}

var num = 2;

for (var i = 0; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num*i));
}               //2     x     1     =      2

var num = parseInt (prompt("Please enter the number"));

for (var i =1; i <= 10; i++) {
    console.log(num + " x " + i + " = "+ (num * i));
}

