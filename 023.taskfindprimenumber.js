var num  = parseInt(prompt("Enter any number"));
var isPrime = true;
for (var i = 2; i < num; i++) {
    var result = num % i;
    if (result === 0) {
        console.log("Number is not Prime"+ num);
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Number is Prime" + " = " + num );
}