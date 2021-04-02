/*
To access all element in array we can use loops to iterate over each array element.
*/ 

var foods = ["Pizza", "Burger","Biryani", "NIhari"];

for (var i =0; i <foods.length; i++) {
    alert(foods[i]); //i = (0[Pizza] => 1[Burger] => 2[Biryani] => 3) 

}

// i will work as index and this code will show alert 3 times each with array elements respectively.

var arr = [5, 1, 3, 6, 90, 46];

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] *2;
}

for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}


var ages = [];

for (var i = 0; i < 6; i++) {
    arr[i] = i *2;
}

for (var j = 0; j < ages.length; j++) {
    console.log(ages[j]);
}