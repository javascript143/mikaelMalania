let myArray = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'grey', 'pink'];

// .join() example
let myArrayAsString = myArray.join(', '); // join() method takes a string as an argument and joins all the elements of the array into a string separated by the argument string
// console.log(myArrayAsString);

// string.split() example

let myString = 'blue, red, green, yellow, orange, purple, black, white, grey, pink';

// console.log(myString.split(', ')); // split() method takes a string as an argument and splits the string into an array of strings separated by the argument string

// object.keys() example
const student = {
    name: 'John Doe',
    age: 25,
    education: 'BSc Computer Science',
    hobbies: ['football', 'basketball', 'gaming', 'reading', 'coding']
};

console.log(Object.keys(student).includes("name")); // Object.keys() method takes an object as an argument and returns an array of the object's keys

// object.values() example
console.log(Object.values(student)); // Object.values() method takes an object as an argument and returns an array of the object's values