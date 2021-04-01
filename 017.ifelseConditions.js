/*
Sometinmes when you write code, you want to perform different actions for 
different decisions. You can use conditional statements in your code to do this.
Following are conditional statements:
1). Use 'if' to execute code, if a specified condition is true.
2). Use 'else' to execute code, if the same condition is false.
3). Use 'else if' to run a new condition, if the first condition is false.
4). Use 'switch' to specify many alternative blocks of code to be executed.
*/ 
//if statement
var age = 12;

if (age < 9) {
    alert('his age is not less than 9');
}

//if else statement

var age = 15;

if (age > 18) {
    alert("Qualifies for driving");
}

else{
    console.log("Does not qualifies for driving");
}

//else if Statement

var score = prompt(" What is your score?");

if (score > 80) {
    console.log("Grade A");
}
else if (score >70) {
    console.log("Grade B");
}

else if (score > 60) {
    console.log("Grade C");
}

else {
    console.log(" You are failed")
}

//Nested if statement

var date = 21;

if (date > 17) {
    console.log(" Perform hijama");

    if (date > 19) {
        console.log(" 21 is the last date for hijama");
    }
}