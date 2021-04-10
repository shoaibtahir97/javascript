/*
ONCLICK EVENT(link<a>anchor tag):-

<a> tag of html is used for linking pages in a website. The <a>
tag has diffrent events which can be nested into it
1). onClick="" event

In the html file where you created the <a> element tag you pass the 
onclick event and pass any javascript code init like this.

<a href="" onclick = "alert('Hello World')"> </a>

One thing to keep in mind is that if you use double quotes in onClick
then you have to use single quotes inside of event.  

You can also call the functions of JS in onclick events.

onclick function can be called on any tag like anchor tag, img tag, button tag or any other
*/ 


function foo() {
    alert("Hello Shoaib");
}


/*
ONMOUSE EVENT:-
1). onmouseover => when user hover on to html element the javascript code present inside onmousehover will be displayed
2). onmouseout => when user moves the mouse out of the html element js code is fired
3). onmousemove => when user moves the mouse within the html element js code is fired

They can be used on all of the tags present in html
*/ 


/*
ONFOCUS EVENT:-
onfocus works when user hover on to an input text feild then clicks on it then onfocus event is fired
onFocus="this.style.backgroundColor='yellow';"
*/ 


/*
ONBLUR EVENT:-
onblur event is opposite of onfocus. 
It works when user clicks on to a input feild then types
on it and when the mouse is removed from the input feild and
user clicks on anything other than input feild it is fired

onBlur="this.style.backgroundColor='white';"
*/ 
/*
STYLING AN ELEMENT IN HTML USING JS:-
You can also style an element of HTML without adding CSS using JS. For this you can use following code

1). onfocus="this.style.backgroundColor="yellow" 
2). onMouseover="this.style.color='green'"
The code means that when onfoucus event is fired the background color of input feild changes yellow
*/ 



/*ONCHANGE EVENT:-
Onchange works when there is any change in word that you typed
*/ 


/*
JAVASCRIPT:VOID(0)
When you use the onclick event handler inside the link element, you
also have to give and href="#", if you use # then the whole page is 
reloaded alongwith the onclick event so instead of # you have to use
href="javascript:void(0)"
*/ 