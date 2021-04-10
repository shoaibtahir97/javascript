/*
Your webpage initially displays a picture of a little mammal known as the slow loris,
along with a single sentence and a link which says "click for more".
When the user clicks the link, the paragraph expands
1). An id is assigned to the paragraph, which will be used by the function. When the user
clicks the link, a function, expandLoris, is called.
1).
*/ 

function slowLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function placeAList() {
    var listToPlace = "<ol><li>Slow Loris</li> <li>Fast Loris</li><li>Just-right Loris</li></ol>"
    document.getElementById("lorisList").innerHTML = listToPlace;
}