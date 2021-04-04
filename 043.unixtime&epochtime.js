/*
UNIX TIME:-
JS understands the date based on a timestamp derived from unix time,
which is a value consisting og the number of miliseconds that have 
passed since midnight on 1st, January, 1970. 
We can get the timestamp with the getTime() method.
*/ 

var date = new Date();

date.getTime(); //157311070

/*
EPOCH TIME:-
Epoch time, also referred to as zero time. It is represented by the 
date string "01 January, 1970 00:00:00" UTC(Universal Time) and by 
the zero timestamp. 
Epoch time was choosen as a standard for computers to measure time in 
earlier days of programming.
*/ 

var date = new Date(0); //Zero refers to epoch time 

console.log(date); //Thu  Jan 01 1970 00:00:00 GMT+0000 (UTC)