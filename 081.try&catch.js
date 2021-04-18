//This function wont run because the keyword alert is misspelled. 
function greeting() {
    var welcome = "Hello World";
    aler(welcome);
}



/*
If you forget any keyword alphabet or any other part then JS won't 
compile it nor will render it on the DOM. 
*/ 

function greetingWorld() {
    try{
        var greeting = "Hello World";
        aler(greeting);
    }
    catch(err){
        alert(err);
    }
}

/*
The original operational code is wrapped in the try block. The mis-formed aler causes
a JavaScript error, which is passed to the catch block. An alert displays the error that caused
the problem.
When you wrap some operational code in a try block, you say to JavaScript, "Try to
execute this code. If there's an error, stop executing, and go to the catch block to see what to
do." In the example above, the error thrown by JavaScript is assigned to the parameter err,
and that value is displayed in an alert:

Note that try and catch are always paired. Without try, an error won't trigger catch.
Without catch, JavaScript won't know what to do when it throws an error.

The try and catch approach is useful mainly for spotting variables that haven't been defined or, as in this case, errors that
JavaScript interprets as variables that haven't been defined
*/ 