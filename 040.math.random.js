/*
If you want to randomly come up with some random number. E.g: If 
you want to make a guessing game, or dice rolling game
math.random() returns a random mumber between 0(inclisive) and 1(exclusive)
Everytime you run this function it will return you a random number.
*/ 

var num = Math.random(); //result = 0.523147584376352563. Whenever you run this function it will return a new number

//A random number having such a small value is of no use. So you want a number that is whole number
//If you want to generate random number between a range then 
//you have to add some calculations like

var num1 = Math.random();

var num2 = (num1 * 6) + 1;

var dice = Math.floor(num2); //1 to 6

//You have to round the value with Math.floor() function so that the random number
//remains within range otherwise (round/ceil) function will convert it to upper number
//which will be not in the range.