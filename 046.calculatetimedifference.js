/*
You can calculate time difference between two days using getTime() function
and calculate difference in days.
getTime returns time in milliseconds so you can find out time difference 
in milliseconds by substracting dates.
Then find out milliseconds in a day.
24 hours * 60 minutes * 60 seconds = 1000 milliseconds
And divide time difference in milliseconds with millisecods of a day
*/ 

var d1 = new Date("June 14 2019 10:45:25");

var d2 = new Date("June 28 2019 10:45:25")

var timeDiff = d2.getTime() - d1.getTime();

var days = timeDiff / (1000 * 60 * 60 *24); //14