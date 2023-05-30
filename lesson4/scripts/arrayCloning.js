let names = ["John", "Jane", "Mary", "Mike", "Matt", "Sevasti"];

// let copiedNames = names;
// copiedNames.pop();
// console.log(names);
// console.log(copiedNames);

let shadowCopyV1 = names.slice();
shadowCopyV1.pop();
console.log(names);
console.log(shadowCopyV1);

let shadowCopyV2 = [...names]; // spread operator
shadowCopyV2.pop();
console.log(names);
console.log(shadowCopyV2);

let shadowCopyV3 = Array.from(names); 
shadowCopyV3.pop();
console.log(names);
console.log(shadowCopyV3);