function Plan(name, space, transfer, pages, ) {
    this.name = name;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    
}

var plan2 = new Plan("Basic", 3.99, 50, 690, 10, [6, 7, 8]);

/*
In the previous examples we created an object having six properties and one method.
All the properties are different for the object but the method is same. 
The constructor function keeps duplicating the same method for each object, after object.
It would work but it aint pretty. 
We want only one copy of the method, shared by all objects created with constructor no matter how many objects are created,
we do this with a prototype statement.
First, we don't include the method in the constructor function, because that creates a copy
of the method for every single object that's created with the constructor.
Instead, we define the method as a prototype of the constructor, this way.
*/ 

Plan.prototype.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMonth = currDate.getMonth;
    for (var i = 0; i < this.discountMonths.length; i++) {
        if (this.discountMonths[i] === thisMonth) {
            bestPrice = this.Price * percentIfDisc;
            break;
        }
    } 
    return bestPrice * 12;
};

/*
Now, all objects created with the constructor Plan will share the same copy of the
method calcAnnual. There's no unnecessary duplication.
everything is same except the parts on the left side:
1). the name of the constructor function, in this case Plan
2). the keyword prototype
3). the name of the method that all objects created with Plan will share, in this case
calcAnnual
*/ 


/*
Objects can have prototype properties as well as prototype methods. Suppose you wanted
all objects created with the Plan to share the same property, cancellable, with a value of
true. You'd code the prototype this way:
Now all objects created with the constructor function Plan share a property,
cancellable, whose value is true.
*/ 

Plan.prototype.cancellable = true;

/*
If you want to override a prototype for any individual object. suppose you
want all objects created with the constructor to share the same cancellable property, except
for the least expensive plan, plan1, with the name "Basic." This is the statement that does it.
All objects created with the constructor still share the property cancellable, but now
the value of that property for one object is different from all the others. 
*/ 

plan1.cancellable = false;