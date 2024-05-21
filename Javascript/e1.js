// let score = prompt("Enter your score:");
// score = Number(score);
// let grade;

// if (score > 100){
//     grade = "beyond max";
// }
// else if (score >= 90) {
//     grade = 'A';
// } else if (score >= 80) {
//     grade = 'B';
// } else if (score >= 70) {
//     grade = 'C';
// } else if (score >= 60) {
//     grade = 'D';
// } else if (score >= 0){
//     grade = 'F';
// }
//   else {
//     grade = "invalid input";
// }


// console.log("Your grade is " + grade);

let grade = prompt("Enter your grade");
grade = Number(grade);
let score;

if (grade > 100) {
    score = 'beyond max';
}

else if (grade >=90) {
    score = 'A';
}

else if (grade >= 80) {
    score = 'B';
}

else if (grade >= 70) {
    score = 'C';
}

else if (grade >= 60) {
    score = 'D';
}

else if (grade >= 0) {
    score = 'F';
}

else {
    score = "an invalid input";
}

console.log("Your grade is " + score);