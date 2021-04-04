/*
Once we have a date, we can access all individual components of the date
with various built-in methods. 
These methods will return each part of the date relative to the local timezone
Each of these methods starts with get and will return the relative number. 
*/ 

var date = new Date(); //current date and time

date.getFullYear(); // YYYY => 1970 

date.getMonth(); //0-11 => 0=January

date.getDate(); //1-31  => 1st day of the month

date.getDay(); //0-6 => 0 = Sunday

date.getHours(); //0-23 => 0 = midnight

console.log(date);
/*
For all the "get" methods that we learned, there is a corresponfding set method.
Where "get" is used to retrieve a specific component from a date, 
"set" is used to modify components of a date

*/ 