/*In setInterval the function is executed after every given time
Now to stop the function first lets create a variable of count having an initial value of 0
and place the variable inside the interval funciton with the increment 
Then we created an empty valriable and place our set timeinterval funciton inside that variable.
Now I want to stop the function after 5 seconds. For that I will create a setTimeout funciton
and inside of it I created a funciton and called the clearInterval function(this funciton stops the function) and inside the parenthesis 
I pass the interval variable that I created
*/ 

var count =  0;
var time;

function interval() {
    count++;
    console.log(count);
}

time = setInterval(interval, 1000);

setTimeout(function() {
    clearInterval(interval)
}, 5000)

// In setTimeout the function is executed only once


function time() {
    console.log()
}


setTimeout(time, 3000);