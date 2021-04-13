/*
How your JavaScript code can make use of this hierarchy of parents
and children to read or change virtually anything on a web page.
a new way to target the paragraph, by using the DOM organization chart.
As we work our way down the organization chart, each parent is followed by a dot,
which is followed by the keyword childNodes, which is followed by a number in brackets, as
in array notation. As in array notation, the first child is number 0.
*/ 

var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[0];
//                  < html >    <body>       <second child>     <first child>             


/*
In actual practice you start from a lower level. For example,
you could start with the second div, specifying its id. Then you 
target one of its children
*/ 

var d = document.getElementById("ny");
var p = d.childNodes[1];
var contents = p.innerHTML;

/*
Instead of writing childNodes[0], you can write firstChild.

*/ 

var targetNode = parentNode.firstChild;




