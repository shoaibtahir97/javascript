/*
You can check to see if an object has a particular property by writng:
Note that property is palces in quotation marks
*/ 
var gotProperty = "price" in plan1;
                //property in object; returns true in this case
                
var hasProperty = "location" in plan1; //false in this case

var listofProperties = [];
for (var prop in plan1) {
    listofProperties.push(prop);
}

/*
Line 10 declares an empty array, listOfProperties.
Lines 11-13 cycle through all the properties of plan1, adding each property (push),
including any methods, to the arraylistOfProperties.
Using the example we've been working with, the array listOfProperties winds up with all the proeries of the object.
After each iteration, JavaScript automatically moves to the next
property of the object and stops iterating when there are no more properties to enumerate.
Note also that instead of prop, you could use any other legal variable name.
*/


/*
The prototype calcAnnual was not present inside the object, we made it part of object 
explicitly and. When you use the above code to get the property it will get you both the 
properties and the prototype that we made. 
But if you want to get only the properties that are made in the object you need to use the "hasOwnProperty" 
*/ 

//literal
var isOwnedProperty = plan1.hasOwnProperty("price");

//for loop
var listofProp = [];
for (var prop in plan1) {
    if (plan1.hasOwnPoperty(prop))
    listofProp.push(prop)
}

/*
In the example above, each property in turn is assigned to the variable prop. Then the if
statement tests to see if it's a property owned by the object as opposed to being inherited
through a prototype.
*/