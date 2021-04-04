/*
getDay() function returns day of weenk, but it will give number 
representing day from 0  to 6.
If you want to convert this value into text representaion then you have
to do it yourself. You create array represent day of week in text format 
and then map value from getDay() function to array
*/ 

var daysList = ["Sun", "Mon", "Tue","Wed", "Thur","Fri","Sat"];

var date = new Date();

var day = date.getDay(); //5

var nameofDay = daysList[day]; //Fri

console.log(nameofDay);