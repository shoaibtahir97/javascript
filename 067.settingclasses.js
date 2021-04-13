/*
This function adds the class "big" to an element. If, for example, the new class, "big,"
specifies a larger font size for the element than it has originally, the result is that the text inside
the element gets bigger.
*/ 

function makeBig() {
    document.getElementById("p1").className += " big";
}

/*
This function changes the default font size of an element with the id
"p1". But, unlike the first example, it doesn't remove any other styles assigned to the element,
whether those styles are specified in css or inline.
*/ 

function makeLarge() {
    document.getElementById("p2").className = "2em" 
    document.getElementById("p2").style.cssFloat = "right";// This statement left-floats an image.

}
