/*
CHANGING THE PROPERTY 
To change the value of an objects number value, use a simple assignment 
statement, the same way you'd assign a value to a plain variable.
You can add property of any data type weather string, number, boolean or array,
You can also change the data type of any previous value with a different one.
*/ 

var deal1 = {
    name: "Basic",
    cost: 800,
    speedInMB: 2,
    timeInDays: 30,
};

deal1.cost = 1000;

console.log(deal1.cost);

/*
DELETINA A PROPERTY
You can delete a property of an object. 
*/
delete deal1.name;

/*
CHECKING THE EXISTENCE OF A PROPERTY
You can check to see if a property of an object exists. The following statement
tests weather there is such a thing as deal3.name and asssigns the result (true or false)
to the variable propertyExists

The keyword "in" asks, "The property market is in the object deal3—true or false?"
The property market is in quotes.
The object deal3 is not in quotes.
*/
propertyExists = "name" in deal1;

