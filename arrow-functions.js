/*
* Assignment 1: JavaScript Arrow Functions
* Complete the exercises below by converting traditional functions to arrow functions
* and writing new arrow functions from scratch.
* Uncomment the tests at the bottom of the file to test that the functions you wrote work as intended
*/

// =============================================
// PART 1: CONVERT TO ARROW FUNCTIONS
// =============================================

// Exercise 1
function greetUser(name) {
return `Hello, ${name}!`;
}

const greetUserArrow = (name) => {
return `Hello, ${name}!`;
};


// Exercise 2
function calculateArea(length, width) {
return length * width;
};

const calculateAreaArrow = (length, width) => {
return length * width;
};


// Exercise 3
function getCurrentTime() {
return new Date().toLocaleTimeString();
}

const getCurrentTimeArrow = () => {
return new Date().toLocaleTimeString();
};


// Exercise 4
function validatePassword(password) {
if (password.length >= 8) {
return "Password is valid";
} else {
return "Password must be at least 8 characters";
}
}

const validatePasswordArrow = (password) => {
if (password.length >= 8) {
return "Password is valid";
} else {
return "Password must be at least 8 characters";
}
};


// Exercise 5
function processOrder(item, quantity) {
const total = item.price * quantity;
const tax = total * 0.08;
const finalAmount = total + tax;
return `Order total: ${finalAmount.toFixed(2)}`;
}

const processOrderArrow = (item, quantity) => {
const total = item.price * quantity;
const tax = total * 0.08;
const finalAmount = total + tax;
return `Order total: $${finalAmount.toFixed(2)}`;
};


// =============================================
// PART 2: WRITING ARROW FUNCTIONS
// =============================================

// Exercise 6
const createFullName = (firstName, lastName) => {
return `${firstName} ${lastName}`;
};


// Exercise 7
const calculateVolume = (length, width, height) => {
return length * width * height;
};


// Exercise 8
const getFirstElement = (array) => {
return array[0];
};


// Exercise 9
const makeUppercase = (string) => {
return string.toUpperCase();
};


// Exercise 10
const getSquare = (number) => {
return number * number;
};


// Exercise 11
const checkAge = (age) => {
if (age >= 18) {
return "Adult";
} else {
return "Minor";
}
};


// Exercise 12
const calculateAverage = (score1, score2, score3) => {
return (score1 + score2 + score3) / 3;
};


// Exercise 13
const evaluateScores = (score1, score2, score3) => {
const highestScore = Math.max(score1, score2, score3);

if (highestScore >= 90) {
return `Excellent work! Top score: ${highestScore}`;
} else if (highestScore >= 70) {
return `Good job! Top score: ${highestScore}`;
} else {
return `Keep practicing! Top score: ${highestScore}`;
}
};


// Exercise 14
const calculateSalePrice = (productName, price) => {
const salePrice = price * 0.80;
return `Product: ${productName} - Sale Price: $${salePrice.toFixed(2)}`;
};


// =============================================
// TEST YOUR FUNCTIONS (DO NOT MODIFY)
// =============================================

// console.log("Testing Part 1:");
// console.log(greetUserArrow("Alice"));
// console.log(calculateAreaArrow(5, 3));
// console.log(getCurrentTimeArrow());
// console.log(validatePasswordArrow("secret"));
// console.log(processOrderArrow({price: 10}, 2));

// console.log("\nTesting Part 2:");
// console.log(makeUppercase("hello"));
// console.log(getSquare(4));
// console.log(createFullName("John", "Doe"));
// console.log(calculateVolume(2, 3, 4));
// console.log(checkAge(25));
// console.log(checkAge(16));
// console.log(getFirstElement([1, 2, 3, 4]));
// console.log(calculateAverage(85, 92, 78));
// console.log(evaluateScores(95, 87, 92));
// console.log(evaluateScores(75, 68, 82));
// console.log(calculateSalePrice("Shoes", 100));
