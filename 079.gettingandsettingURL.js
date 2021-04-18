/*
JS can control the browser. You can get current location/page of browser.
*/ 

var whereAt = window.location.href; 


// This statement gets the domain name. The path and achor are omitted
var theDomain = window.location.hostname;


//This statement only gets the path and anchor
var thePath = window.location.pathname;


// This statement identifies the anchor. If no anchor returns empty string
var theAnchor = window.location.hash;


// You can reverse the order of thingsm telling the browser where to go instead
// of asking where it is.

window.location.href = "http://www.me.com/1.html"
//The statement above tells the browser to navigate to the page named 1.html at the site me.com.


// This statement navigates to home page.

window.location.href = "http://www.me.com"


