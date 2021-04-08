/*
Switch statements executes a block of code depending on different cases
The switch statement is a part of "Conditional statements" which are used to perform different actions based on different conditions
Switch statement works for equality checks only, you can not apply range, greater than or less then checks like in if else statements
You provide a case if it matches then the 

Thiss is how it works:
a.  The switch statement evaluates an expression
b.  The value of the expresssion is then compared with the values of 
    each case in the structure
c.  If there is a match, the associated block of code is executed

The switch has one or more case blocks and an optional default. Switch cases are verbose
*/ 

//EXAMPLE- 1

var day = 3;

switch(day) { //expression could be any string, number, boolean or variable which is converted to value
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Tofay is Sunday");
        break;

    default:
        console.log("Looking forward to the Weekend");
}

/*
GROUPING OF CASE:-
Sometimes you will want different cases to use the same code, or fall through to a common default 
If you skip the break then the expression match to the case will continue on matching the case 
and where you feel that all the cases are completed there you put the break so the switch case wont check the remaining line
*/ 

/*EXAMPLE- 1
In this example if 0 is places in variable then 0 will come to case 6 it willl not match and then to case 0 where it will match 
and print the result. If user pass 6 then first case will be executed and because there is no break so there will be no checking and
next case will be executed. 
*/

var day = 3;

switch(day) { //expression could be any string, number, boolean or variable which is converted to value
    case 6:
        console.log("Today is Saturday");
    case 0:
        console.log("Tofay is Sunday");
        break;

    default:
        console.log("Looking forward to the Weekend");
}


/*
EXAMPLE- 3:-
If you want to give same output on both the case then you can combine both of them 
Because case 6 dosen't have any statement or break therefore it will move on to case 0
*/ 

var day = 3;

switch(day) { //expression could be any string, number, boolean or variable which is converted to value
    case 6:
    case 0:
        console.log("Tofay is Sunday");
        break;

    default:
        console.log("Looking forward to the Weekend");
}


/*
SWITCH - STRICT COMPARISON
Switch case performs typed equality comparison i.e the vlues should have same data type
Switch cases use strict comparison(===) 
The values must be of the same type to match
A strict comparison can only be successful if the  operands are of the same type
*/ 

/*
EXAMPLE - 4
Since the variable has a string sata type and the case is in numeric so switch case will execute
default case as the value did not match
*/ 
var day = "3";

switch(day) { //expression could be any string, number, boolean or variable which is converted to value
    case 6:
    case 0:
        console.log("Tofay is Sunday");
        break;

    default:
        console.log("Looking forward to the Weekend");
}
