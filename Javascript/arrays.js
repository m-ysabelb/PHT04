// creating arrays

let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

// accessing individual elements = index
// third fruit
console.log("Third fruit: ", fruits[2]);
console.log("First fruit: ", fruits[0]);
console.log("Last fruit: ", fruits[fruits.length - 1]);
// .length - total number of array


// modifying elements/array
fruits[1] = "grapes";
console.log(fruits);

// .push() - add an element at the end
fruits.push("watermelon");
console.log(fruits);

// .pop() - remove the last element
fruits.pop()
console.log(fruits);

// array iteration
for (let i = 0; i < fruits.length; i++) {
    console.log("fruits: ", fruits[i]);
}

//forEach
let colors = ["red", "blue", "yellow"]

colors.forEach(function(color) {
    console.log(color);
})

// Array Methods
let numbers = [1, 2, 3, 4, 5];

// length
console.log("Array length: ", numbers.length);

// indexOf
console.log("Index of 3: ", numbers.indexOf(3));

// join
console.log("joined array: ", numbers.join(","));

// slice
let sliceArray = numbers.slice(1, 3) // slice (start (inclusive), end (exclusive))
console.log("Sliced Array: ", sliceArray);

// splice(start, number of elements we want to remove)
let removedElements = numbers.splice(1, 2);
console.log("Removed elements:", removedElements);
console.log("Updated array", numbers);