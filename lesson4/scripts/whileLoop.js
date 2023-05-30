let waterTank = 0; // liters

// while (waterTank < 10) {
//     waterTank = waterTank + 1;
//     console.log("The water tank contains " + waterTank + " liters.");
// }

// let count = 0;

// while (count < 10) {
//     count = count + 1;
//     if (count % 2 == 0) {
//         console.log(count + " is even.");
//     } 
//     // else if (count % 2 != 0) {
//     //     console.log(count + " is odd.");
//     // }
//     else {
//         console.log(count + " is odd.");
//     }
// } 

let students = ["John", "Jane", "Mary", "Mike", "Matt", "Sevasti"];

let groupA = [];
let groupB = [];

let count = 0;

while (count < students.length) {
    if (count % 2 == 0) {
        groupA.push(students[count]);
    } else {
        groupB.push(students[count]);
    }
    count = count + 1;
}

console.log(groupA);
console.log(groupB);