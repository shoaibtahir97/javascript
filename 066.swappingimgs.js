/*
In chapter47 you learned about changing the picture with when 
user mouse hover on it. Another way to do this is calling a function.
After the document function we write .src because we are using inages
*/

function swapPic() {
    document.getElementById("before").src = "./images/after-lake.jpeg";
}

/*
Why not make the function a general-purpose routine that can swap any image for any other image? 
In order for this to work, the markup has to pass both the id and the name of the
replacement image to the function as arguments.
*/ 

function chngPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}

/*
You can also use document.getElementById() function by saving the result
inside a variable. And then you can use that variable with.src keyword to get the new image
using its name.
*/ 

function chngImg() {
    var pic = document.getElementById("first");
    pic.src = "after-pic.jpg";
}

