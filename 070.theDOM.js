/*
In previous chapters you learned to target comoponents of web page so
you could read or set them. They are best to target methods but have some limitations.
First, they access to only those components that have been assigned an id.
Second, they change the whole tag that is assigned not a part of it.
Both of these approaches are only two of many methods for working with the
Document Object Model, the DOM.

    The DOM is an organization chart, createdautomatically by the browser when your web page loads,
for the whole web page. All the things on your web page—the tags,text blocks,images,links,tables,style
attributes, and more—have spots on this organization chart. This means that your JavaScript
code can get its hands on anything on your web page, anything at all, just by saying where that
thing is on the chart. Your JavaScript can add things, move things, or delete things
by manipulating the chart. If you wanted to (you wouldn't), you could almost create an entire
web page from scratch using JavaScript's DOM methods.
1st level:              document
2nd level:               <html>
3rd level:     <head>               <body>
4th level:    <title>                <div>
5th level:                            <p>
In the DOM organization chart, each box represents a node. In this particular chart, 
there are three types of nodes: document, element, and text.

    You can also designate a node by saying it's the parent of any child.
Except for the document node, each node is enclosed within another node.
The <head> and <body> nodes are enclosed within the <html> node.
The enclosed node is a child of the node that encloses it. 
Nodes with the same parent are known as siblings. So, <head> and
<body> are siblings because < html> is the parent of both. 

<p>This is <em>important</em>!</p>

The the text node "important" is enclosed by the element node <em>, this
particular text node is the child of <em>, not <p>
*/ 