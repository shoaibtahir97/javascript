/*
In JS value or expression can be converted to boolean. If you apply
boolean comparision by (logical/ comarision operators) on values then JS convert that values to boolean
and make comparision.
You can use values in if else condition and they will result in 
true or false according to values
In JS every value wether it's number, object, string every single value
has it's boolean value representation
any number other than zero / alphabet = true;
null = false;
NaN  = false;
undefined = false;
0 = false;
""/''(empty string) = false;
*/ 

var age = 45; //In this case we have a number other than 0 that's
// why it is true and if its true  if statement is executed. If we 
// add values that are false then else statement will be executed 

if (age => 40) {
    console.log("You are man");
}

else {
    console.log(" You are a youngster")
}