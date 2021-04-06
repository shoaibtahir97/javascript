// RULES OF PARAMETERS:-
// 1). JS function definitions do not specify data types for parameters.
// As we know that JS is a dynamic language its variables does not have any data types.
// The type of data stored in the variable defines the data type.
// So whenever you crete a function and recieve an input, if you are expecting the input as number,
// but if the caller has passed a string then there is no stopping to it, you have to manage it yourself

// 2). JS functionn do not perform type checking on the passed arguments

// 3). JS function do not check the number of arguments recieved.

// 4). If a function is called with missing arguments(less than declared) the values are set to "undefined" 


function showMessage(name) {
    console.log("Hello" + name);
}

showMessage("John");  //Hello John
showMessage(45);      //Hello 45
showMessage(true);    //Hello true
showMessage();        //Hello undefined
showMessage("Mike", 12); //Hello Mike  (here we passed two values and JS understands only one argument therefore it is not printed)

//COMPLEX EXAMPLE USING TWO FUNCTIONS AS A RETURNED VARIABLE

function calculateMarks(subj1,  subj2, subj3) {
    return (subj1 + subj2 + subj3)/3;
}

function findGrade(score) {
    if (score > 80 && score <=100) {
        alert(" Grade A-1");
    }
    else if(score > 70 && score <=80) {
        alert(" Grade B");
    }
    else if(score > 60 && score <=70) {
        alert(" Grade C");
    }
    else if(score > 50 && score <=60) {
        alert(" Grade D");
    }
    else {
        alert(" Grade F");
    }
}
var marks = calculateMarks(65, 86, 98);

console.log(marks);

findGrade(marks);