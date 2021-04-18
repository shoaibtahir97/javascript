/*
Line 1 assigns the element to the variable b1. Line 2 watches for the element to be
clicked. When that happens, it calls the function sayHello.
*/ 

var b1 = document.getElementById("button1");
b1.onclick = sayHello;

function sayHello() {
    alert("Hi there!");
}

/*
Things to notice:
1). Unlike inline event-handling, the function name following the equal sign isn't in quotes
2). Unlike inline event-handling, there are no parentheses following the function name.
3). You can use any event handler like onsubmit, onmouseover etc.
*/ 