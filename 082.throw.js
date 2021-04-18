/*
By adding one or more throw statements, you can define your own errors in a try...catch
pair
Suppose you've asked the user to create a password. It must be at least 8 to 12 characters
long, must contain at least one number, and can't contain any spaces.

The catch code, instead of catching a JavaScript-generated error,
catches the string sent by throw
Note that any type of value, including a number or Boolean, can be passed to the catch
parameter via throw. You can also pass a variable.
*/

function checkPassword() {
    try {
        var pass = document.getElementById("f1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++) {
            if (isNaN(pass(i, i + 1)) === false) {
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false) {
            throw "Include at least 1 number.";
        }
    }
    catch (err) {
        alert(err);
    }
}
/*
From line 23-32. First it decclare a false boolean to a variable
2). A for loop to loops through the length of the the password
*/