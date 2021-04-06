/*
Just like we can pass input in our function to change the output,
a function can return data/values back to the caller.
0). Declare a function
1). Call a function
2). Perform business logic in the function
3). Return the result to the caller
By this the user can be awared by the result of the function.

So you can create two types of functions
1). Create a function => function completes its task and finish
2). Create a function => function completes its task and returns the output

After executing logic in function if you want to return result to the 
caller of function then you use return keyword inside the function and pass a value with it.

When JS reacjhes a return statement the function will stop executing and return calue is "returned" back to the "caller"

Every function in JS returns undefined unless otherwise specified

The benefit of using return is that whatever values after calculation you want to pass back is placed inside the return
*/ 


function test(){

}

var a = test(); //we have stored the returned value inside a variable because whenver a funciton returns a value
                // you have to hold the value somewhere then only you can utilize the value
console.log(a); //return undefined




function test2() {
    return 45; //here 45 is hardcoded so whenever you call this function it will return 45 in response
}

var b = test2();

console.log(b);//return 45



function test3(num1, num2) {
    num3 = num1 * num2;
    return num3;
}

var c = test3(3, 6);

console.log(c);

console.log(test3(4, 2)); //you can directly pass the returned value inside console.log,alert or document.wrirte 


function test4(num1, num2) {
    return num2; //num2 will be returned only and next return will not be returned because once the function identifies the first return statement the execution of the function stops.
    return num1 * num2;
}

var e = multiply(3, 6);

console.log(e);   