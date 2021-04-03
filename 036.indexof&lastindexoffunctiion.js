/*
1). indexof():- It returns the index of the first occurence of a
    specified text in a string. If text is not found, -1 is returned.
    You can also pass optional argument in indexof() in which you 
    specify position from where to begin the search of string. 
    If not provided its default is 0,
*/ 

var a = "To be or not to be";

var b = a.indexof("be"); //returns "3"

var c = a.indexof("be", 10); //returns "16"
console.log(b, c);

/*
2). lastindexof():- It returns the index of the last occurence of a 
    specified text in a string. It searches bacckwardsfrom the end to the beginning
    If text is not found, -1 is returned.
    
*/ 

var d = "To be or not to be";

var e = d.lastindexof("be")//returns "16"

var f = d.lastindexof("be",10);//returns "3"

console.log(e, f);

//The word you are looking for should be as it is in the string, 
//if not then it will return nothing and returns -1 as an error 