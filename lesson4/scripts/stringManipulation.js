// let userInput = prompt("Enter your password: ");

// let isPasswordFormatCorrect = false;

// while (!isPasswordFormatCorrect) {
//     if (userInput.length < 8) {
//         alert("Password must be at least 8 characters long.");
//         userInput = prompt("Enter your password: ");
//     } else if (userInput.length > 20) {
//         alert("Password must be less than 20 characters long.");
//         userInput = prompt("Enter your password: ");
//     } else {
//         isPasswordFormatCorrect = true;
//     }
// }

// alert("Password is in correct format!");

let myString = "Hello World! and Hello Universe!";
console.log(myString.length); // determines the length of the string
console.log(myString[0]); // returns the character at the specified index

console.log(myString.slice(0, 5)); // returns a substring from the specified index range

// any of above in console.log() can be used as:
let slicedString = myString.slice(0, 5);

console.log(myString.toUpperCase()); // returns the string in all uppercase
console.log(myString.toLowerCase()); // returns the string in all lowercase

console.log(myString.indexOf("o")); // returns the index of the first occurrence of the specified value

console.log(myString.replace("Hello", "Goodbye")); // replaces the first occurrence of the specified value with another value

console.log(myString.replaceAll("Hello", "Goodbye")); // replaces all occurrences of the specified value with another value

console.log(myString.includes("Hello")); // returns true if the string contains the specified value, otherwise false

console.log(myString.split(" ")); // splits a string into an array of substrings

let randUsername = "  user123  ";
console.log("===" + randUsername + "==="); // prints the string with whitespace on both ends
console.log("===" + randUsername.trim() + "==="); // removes whitespace from both ends of a string

let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`); // string interpolation (template literals)