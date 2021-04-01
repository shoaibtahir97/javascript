/*
During the iteration of foor loop you want to break the loop depending on any business logic or getting a result and after that you want to stop the loop. 
You can do this using if statement which is having any condition, you write the 'break' keyword and after that condition the program is terminated. 
*/ 
for (var i =0; i < 8 ; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

/*
During the loop if you want to skip any iteration you can use 'continue' keyword, in which you can tell the program that if such expression is met, skip that 
iteration and continue on to the next iteration.  
*/ 

for( var i = 0; i < 10; i++) {
    if (i ===6) {
        continue;
    }
    console.log(i);
}
