/*
READING FEILD VALUES
Reading feild values is another functionality of JS in which you can 
copy feild values and use them in JS functions and manipulate those values
like creating an alert etc.
1). create an input text feild and a button
2). Give the input feild an id
3). Create a function in Javascript
4). Create a variable inside the function
5). Use the function 'document.getElementById("")' and pass the id inside parenthesis, the getElement function will temporarily save the text feild in value attribute 
6). Whenever you call the variable with  keyword "name.value"  in which you have called the getElement function the text feild will be displayed wherever you have used it, in our case we have used it in alert.
7). Inside the button tag call the onclick function and inside of it pass the getName function that you created in JS
8). If you dont use the value keyword alongwith variable name then it will not  return the text feild instead it will return the whole input tag. 
9). If you want that the input feild becomes empty when you have typed the text inside the feild then at the end of the function type "name.value = """
*/ 

function getName() {
    var name = document.getElementById("name")
    alert("Hello " + name.value);
    name.value = ""
}

function checkAddress(feildId) {
    var val = document.getElementById(feildId).value;
    if (val === "") {
        alert("Email address required");
    }
}

/*
SETTING FEILD VALUES
In setting feild values, when you open or refresh the page already theres a text present inside the text feild by default
The method is same as reading feild values but the only difference is that function calling is done in JS, 
function is not called inside the "onclick" function inside button feild.

*/ 

function setName() {
    var age = document.getElementById("age");
    age.value = "Enter your age"
}

setName();

// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch(zipEntered) {
//         case '72500':
//         cityName = "Airport";
//         break;
//         case '75760':
//         cityName = "Baldia Town"
//         break;
//         case '75950':
//             cityName = "Federal B Area";
//             break;
//     }
//     document.getElementById('city').value = cityName;
// }

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("postal").value;
    switch (zipEntered){
        case "1234" :
            cityName = "Karachi";
            break;
        case "5678":
            cityName = "Lahore";
            break;
        case "9101":
            cityName = "Islamabad";
            break;
    }
    document.getElementById("city").value = cityName;
}

/*
SETTING PARAGRAH VALUES
You can also add a default paragraph on the DOM when you refresh the page
But there is a difference that when you call the variable with value attribute instead of value you have to use 
"innerHTML" of "innerText" 
*/ 

function setPara() {
    var name = document.getElementById("para")
    name.innerText = "Hello this is an example"
}

setPara();