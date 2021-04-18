/*
If you have to create a plan for all three of the packages it gets 
troublesome, There's a method to solve this problem which is called the 
contructor function. Its a pure function but has only two differences.
1). The function name is capitalized. This differentiate constructor function 
with regular function
2). Each of the parameter values is assigned to a variable. 
The variable is a property attached to some object whose name hasnt been specified yet.   
When parameter values are filled in by a calling code, so will be the name of the object.
*/ 

function Plan(name, price, pages, transfer, space) {
    this.name = name;
    this.price = price;
    this.pages = pages;
    this.transfer = transfer;
    this.space = space;
}

/*
This is the calling code that creates the object for the Basic plan.
This would be just a regular function call if it werent for that "new" keyword
This keyword tells JS to create a new object. The name of the new object is plan1.
The properties are present inside the parenthesis
Now its easy to mass-produce as many objects as you want using the same pattern.
*/

var plan1 = new Plan("Basic", 3.99, 10, 100, 500);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan ("Ultimate", 9.99, 2000, 20000, 500);


//It's common to use the same names for the parameters and properties, but you dont hav to.

function Student(name, age, section, id, precentage ) {
    this.naam = name;
    this.umar = age;
    this.class = section;
    this. number = id;
    this.marks = precentage;
}

var student1 = new Plan("Umer", 24, II-Date, 758309, 90);