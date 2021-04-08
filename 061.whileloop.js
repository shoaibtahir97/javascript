/*
While loop is similar to for loop which is used to execute a block of code again and again
The while loop loops through a block of code as long as a specified condition is true
The difference is that while loop only requires boolean(true or false condition) whereas for loop three things
a variable, condition and expression
In while loop you don't know how many times the loop is going to run
So you will use while loop when executionis dependant on user input 
*/ 

// EXAMPLE - 01
i = 0;

while (i < 10) {
    console.log("I = " + i);
    i++;
}

// EXAMPLE - 02

var doContinue = true;

while(doContinue) {
    console.log("Hello");

    var input = prompt("Press Y to tun again or any key to stop");
    if (input.toLowerCase() !== "y") {
        doContinue = false;
    }
}
console.log("After Loop");


/*
Do while is a variant of the while loop. This loop will execute the block of code once, before checking if the
condition is true, then it will repeat the loop as long as the condition is true.
You will use do/while loop when execution is dependant on user input but
it needs to run code block at least once
*/ 

do {
    
}

while(condition)


do {
    console.log("I = " + i);
}

while (i < 10);