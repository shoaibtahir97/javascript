/*
Suppose you want  collection of paragraphs within a particular div.
You can do this by following code.
*/ 
function getsome() {
    var e = document.getElementById("rules"); //assigns the div with the id "rules" to the variable e.
    var paragraphs = e.getElementsByTagName("p"); //makes a collection of all the paragraphs in the div and assigns the collection to the variable paragraphs.


/*
Suppose you have a table with a white background. When the user clicks a button, the cells turn pink.
Heres the code
*/ 
    var t = document.getElementsById("table9"); //Targets the table by its id
    var cells = t.getElementsByTagName("td"); //Assembles a collection of all the elements in the table with a td tag
    for (var i = 0; i < cells.length; i++) { //Loops through all of them to change their background color
        cells[i].style.backgroundColor = "pink";
    }
}