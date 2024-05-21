// conditional statements
// if

let number = 25;

if (number > 23) {
    console.log("You are greater than 23");
}

// if / else if / else
if (number > 25) {
    console.log("You are greater than 25");
}

else if (number < 25) {
    console.log("Youre less than 25");
}

else {
    console.log("Youre equal to 25");
}

// Switch

let day = "Tuesday";

switch (day) {
    case "Monday": // if it is equal to this
        console.log("It's the start of the week");
        break;

    case "Friday":
        console.log("It's the end of the week");
        break;
    
    default:
        console.log("It's a regular day");
}

// Loops
// for loop 
// for (initial value for variable; times to execute; add/less everytime)

for (let i = 1; i <= 5; i++) {
    console.log("For loop count: ", i);
}

// while loop
// while (condition)
let count = 1;

while (count <= 5) {
    console.log("while loop count: ", count);
    count++;
}

//do-while loop
let j = 1;

do {
    console.log("Do while count: ", j);
    j++;
}

while (j <= 5);


let input = "";
do {
    input = prompt("Please enter your name: ");
}
while ((input = ""));