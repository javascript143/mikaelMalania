// for (let count = 0; count < 10; count = count + 1) {
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

// let names = ["John", "Jane", "Mary", "Mike", "Matt", "Sevasti"];

// for (let i = 0; i < names.length; i = i + 1) {
//     console.log("Hello " + names[i] + "!");
// }

let locationInfo2D = ["Georgia", "Armenia", "Azer", "Turkey", ["Tbilisi", "Yerevan", "Baku", "Ankara"]];

// for (let element of locationInfo2D) {
//     console.log(element);
// }

for (let i = 0; i < locationInfo2D.length; i++) {
    let element = locationInfo2D[i];
    if (Array.isArray(element)) {
        for (let j = 0; j < element.length; j++) {
            console.log(element[j]);
        }
    } else {
        console.log(element);
    }
}
