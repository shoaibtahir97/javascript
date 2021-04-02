var arr = [34, 23, 56, 88, 45, 98];

var input = parseInt(prompt("Enter number to find"));

console.log("Users input = " + input);

numberGuessed = false;

for (var i = 0; i < arr.length; i++) {

    if (input === arr[i]) {
        alert(" You have guessed the number " + arr[i]);
        numberGuessed = true;
        break;
    }
}

if (!numberGuessed) {
    alert("You guessed the wrong number");
}