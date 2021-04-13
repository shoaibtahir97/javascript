/*
Find all the paragraphs in the document and increase their size. 
By using this method you can target any tag example "img", "div", "ul" etc
*/ 

function increaseFont() {
    var par = document.getElementsByTagName("p"); //The variable, par, now holds an array-like collection of all the paragraphs in thedocument. Suppose, to keep things simple, that the body of the document comprises just three paragraphs. par[0] is the first paragraph. par[1] is the second paragraph. par[2] is the third paragraph. par.length is 3, the number of items in the collection.
    var secondPara = par[1].innerHTML; //the variable textInMiddleParagraph is assigned the second paragraph
    par[1].innerHTML = "READ LOTS OF QURAN IN RAMAZAN";// the paragraph text changes to "READ LOTS OF QURAN IN RAMAZAN"
    for (var i = 0; i < par.length; i++) {  //A loop that assigns a font family to all the paragraphs.
        par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
    }
}

/*
The variable, par, now holds an array-like collection of all the paragraphs in the
document. Suppose, to keep things simple, that the body of the document comprises just three
paragraphs.
par[0] is the first paragraph. par[1] is the second paragraph. par[2] is the third
paragraph. par.length is 3, the number of items in the collection.
*/