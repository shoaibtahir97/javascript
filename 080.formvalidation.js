

/*
FORM VALIDATION: TEXT FEILDS
You can check to see if the user has filled the form or not.
*/ 

function checkForLastName() {
    var check = document.getElementById("lastNameFeild") 
    if (check.value.length === 0) {
        alert("Please write your last name");
        return false;
    }
    
}

/*
The Boolean value false is returned to the calling
code. This prevents the form from being submitted. In order for the submission to be called off,
there has to be a matching keyword return in the markup that calls the function. Without this
return in the calling code, the return in line 4 of the function won't stop the form from being
submitted.
*/ 

// As a user-friendly touch, you can use the focus method to place the cursor in the field
// that needs to be completed.

function checkforLastName() {
    var check = document.getElementById("lastNameFeild");
    if (check.value.length === null) {
        alert("Please enter your last name");
        check.focus();
        return false;
    }
    
}

// FORM VALIDATION: DROP-DOWNS 

function checkForSelection(selecID) {
    var checking = document.getElementById(selecID);
    if (checking.selectedIndex === 0) {
        alert( "Please select a country");
        return false;
    }
}

//If selectedIndex is 0, it means the user hasn't made a selection.


// FORM VALIDATION: RADIO BUTTONS

function validateRadios() {
    var radios = document.getElementById("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
      
    }
    alert("Please check one");
    return false;
}


//FORM VALIDATION: ZIP CODES 

function validateZIP() {
    var valueEntered = document.getElementById("zip").value;
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5 digit code")
        return false
    }
}

/* FORM VALIDATION : EMAIL
To check that user has entered the correct email. We test the user entry with a 
regular expression.
*/

//Checkig illegal spcaes in email

function validateEmail() {
    var entered = document.getElementById("email");
    if(entered.Indexof(" ") !== -1) {
        alert("No spaces allowed i address");
        return false;
    }


/*
Line 86 is the key here. If the index of the illegal space character is anything other than -1,
it means the character is in there somewhere and an alert displays
You could test for the presence of all the other illegal characters the
same way.
*/ 


/*
In an email address you want to see the @ sign at least one character from the beginning
of the string and no closer to the end of the string than 5 characters away. 
Here's an example. The fuction continues
*/ 

    if ( entered.indexOf("@") < 1 || entered.indexOf("@") >entered.length - 5) {
        addressIsLegal = false;
    }
    if (addressIsLegal === false) {
        alert("Please correct email address");
        return false
    }
}

/*
About line 7: The first part, left of the pipes, tests whether the character is at the
beginning of the address, which would be illegal.
The second part, right of the pipes, tests whether there are fewer than 4 characters following the character. 
Since there must be at least one character for the domain name plus a dot plus at least two characters for the extension,
fewer than 4 characters following the @ would be illegal.
*/