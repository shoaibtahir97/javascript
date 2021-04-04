/*
Math class provides many functions that allows you to perform 
mathematical tasks on numbers
1). Math.round():- It returns the value of x rounded to its nearest
    integer. E.g: calculating average score will result number with 
    decimal places and you need to round them
*/ 

var average = (15 + 23 + 39) / 3; //25.6666

var roundedAverage = Math.round(average); //26

var roundedNumber = Math.round(4.7); //5

var roundedNumber2 = Math.round(-4.2); //-4

var roundedNumber2 = Math.round(-4.5); //-4 because -4 is higher than -5

var roundedNumber2 = Math.round(-4.7); //-5

console.log(roundedAverage); 

/*
2). Math.ceil():- It returns the value of x rounded up to its nearest
    integer. Ceil rounds the value to the upper side only
*/ 

var a = Math.ceil(4.7); //5

var b = Math.ceil(4.1) //5

var c = Math.ceil(-4.1) //4

var d = Math.ceil(-4.7) //4

/*
3). Math.floor():- It returns the value of x rounded down to its nearest
    integer. Floor rounds the value to the lower side only.
*/ 


var a = Math.ceil(4.7); //4

var b = Math.ceil(4.1) //4

var c = Math.ceil(-4.1) //5

var d = Math.ceil(-4.7) //5
