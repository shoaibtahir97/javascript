/*
FUNCTION DECLARATION/CREATION:-
    Before using a function you need to create that function.
A JS function is created with the (function) keyword, followed 
by (name) of function, followed by (parenthesis())
The rules for naming a function is similar to that of variable.
Function name can contain letter, digits, underscores and $ sign.   
The parenthesis may include parameter names seperated by commas for customization(parameter1, parameter2. ...)
The code/business logic to be executed by the function is placed inside curly brackets{}.
This may include all the things that we have studied like variables, for loop, if else statements, array etc.
The code present inside function will be executed only when they are called
This whole thing is called declaration because function is declared not executed
*/ 

function sum (a, b) { //FUNCTION DECLARATION
    return a + b;
}

/*
FUNCTION INVOKING:-
    Function executes when the function is called. The calling of function is also 
called as invoking. You can invoke a function by referncing the function name, 
followed by open and closed parenthesis()
*/ 

function showMessage(message) { //FUNCTION DECLARATION
    console.log(message);
}

showMessage("Hello World"); //FUNCTION INVOKING