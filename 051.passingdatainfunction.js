/*
Function is made so that you can execute your business logic time and again.
But if you have made a code that executes same code again and again then it is of no use
E.g: You have made a function having console.log("Hello World"). The function will execute 
console function again and again. 
You want the function programmable rather than a one -job robot, then you have to 
recieve the data you're passing.
You can pass any different type of data/input to function depending on requirement
The business logic is same but there is some customization. To do this you have to pass input parameters
inform of arguments, the function accepts those parameters and then the business logic is changed based on parameters
*/ 

function multiply(num1, num2) { //num1 and num2 are parameters as well as local variables that are creted inside the ffunction
    var num3 = num1 * num2;    //these variables are created wihtout using var keyword
    console.log("Num3", num3);
}

multiply(3, 4);//while calling the function the input you give to the function in form of arguments that will be executed


function showMessage(name){
    console.log("Hello" + name);
}

showMessage("Shoaib");

showMessage("Tahir")