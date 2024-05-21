// JS Operators - symbols or keywords to perform operations
// JS Expressions

// Arithmetic Operators and Expressions
let a = 10;
let b = 5;

// Addition
/*a = a + b; is also the same
console.log(a); */


// Compound assignment operator
a += b; //a = a + b; is also the same
console.log(a);

// Subtraction
a -= b; //a = a - b; is also the same
console.log(a);

// Multiplication a = a * b
a *= b;
console.log(a);

// Division a = a / b
a /= b;
console.log(a);

// Modulo a = a % b
a %= b;
console.log(a);



// concatenation 
console.log("Hello" + " " + "World " + a + " " + b);

// Comparison operators
let x = 10;
let y = 5;

// greater than
console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // lesser than or equal to
console.log(x == y); // equal
console.log(x != y); // not equal

// Type Coercion
console.log(50 == "50"); //true, loose equality
console.log(50 === "50"); // false, strict equality

// Logical Operators 
let sunny = true;
let warm = false;

// AND - &&
console.log("Sunny AND Warm", sunny && warm);

// OR - ||
console.log("Sunny AND Warm", sunny || warm);

// NOT - !
console.log("Not sunny", !sunny);

// Unary operators (++, --)
let num = 1;
num++; // add 1 to num
console.log(num);

num--;
console.log(num);

// Ternary operators --(condition ? result : else)
let activeStatus = true;
let member = activeStatus ? "Registered" : "Not Registered"
console.log(member);

// typeof operator - typeof() 
console.log(typeof activeStatus);
console.log(typeof member);