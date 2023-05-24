function sumAllArrays(array1=[], array2=[], array3=[]) {
    let sumOfArray1Items = array1.length;
    let sumOfArray2Items = array2.length;
    let sumOfArray3Items = array3.length;

    return sumOfArray1Items + sumOfArray2Items + sumOfArray3Items;
}

let result = sumAllArrays([1, 2, 3], [1, 2, 3, 4]);

// arrow functions

const sumAllArraysArrowFunction = (array1=[], array2=[], array3=[]) => {
    let sumOfArray1Items = array1.length;
    let sumOfArray2Items = array2.length;
    let sumOfArray3Items = array3.length;

    return sumOfArray1Items + sumOfArray2Items + sumOfArray3Items;
}

console.log(sumAllArraysArrowFunction([1, 2, 3], [1, 2, 3, 4]));