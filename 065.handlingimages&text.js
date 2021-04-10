/*
If you want the user to remove an image that they dont like then
1). create an image tag, add the image init and create and onclick event handler 
having a function call
2). inside the function you call the img tag using its id and pass in css property 
of display none inside className.
3). When the function is called it assigns the "hidden" class to the element 
with the id "ugly". The image disappears.
*/ 

function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
}


/*
You can add a class to an element, preserving its existing classes. 
Suppose you have a paragraph with a class that styles it in Verdana, size 1 em.
When the user mouses over it, you want to double its size to 2 em. But you don't want to lose the
Verdana styling of its original class. Rather than replace the class that styles it in Verdana, you
want to retain that class and add the class that enlarges the font.  This is the function.

It's += instead of just = (+= is used when you eant to add something withsomething else)
A space before the class name is required.
*/ 

function makeBig() {
    document.getElementById("p1").className +=  " big";
}