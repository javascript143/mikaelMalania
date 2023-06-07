let fruits = ['apple', 'apple', 'apple', 'grape', 'orange', 'banana', 'mango'];

let filteredFruits = [];

for (let fruit of fruits) {
    if (fruit !== 'apple') {
        filteredFruits.push(fruit);
    }
}

// console.log(filteredFruits);
let filteredFruitsV1 = fruits.filter(fruit => fruit !== 'apple');
// console.log(filteredFruitsV1);

let filteredFruitsV2 = fruits.filter(function(fruit) {
    if (fruit === 'apple') { 
        return false;
    } else {
        return true;
    }
});

// console.log(filteredFruitsV2);

function submitStudentsData() {
    let studentNames = document.getElementById('studentNames').value;
    studentNames = studentNames.split(', ');

    let studentsGraduationData = studentNames.map(student => student + ' graduated from college');

    // document.getElementById('result').innerHTML = studentsGraduationData.join('<br> ');

    let studentsGraduationDataV1 = studentNames.map(function(student) {
        return student + ' graduated from college';
    });

    // document.getElementById('result').innerHTML = studentsGraduationDataV1.join('<br> ');


    

}

function submitForEachExample() {
    let studentData = document.getElementById('studentData').value;
    studentData = studentData.split(', ');

    studentData.forEach(function(student) {
        if (parseInt(student) < 18) {
            document.getElementById('result').innerHTML += student + ' is not eligible to vote <br>';
        }
    })
}

function everyMethodExample() {
    let studentData = document.getElementById('studentData').value;
    studentData = studentData.split(', ');

    let areStudentNamesSame = studentData.every(function(student) {
        return student === 'giorgi';
    });

    if (areStudentNamesSame) {
        document.getElementById('result').innerHTML = 'All students are named the same name';
    } else {
        document.getElementById('result').innerHTML = 'Not all students are named the same name';
    }

    let desiredName = 'gela';

    let studentsContainDesiredName = studentData.some(function(student) {
        return student === desiredName;
    });

    if (studentsContainDesiredName) {
        document.getElementById('result').innerHTML += '<br> Some students are named ' + desiredName;
    }

};

function reduceMethodExample() {
    let studentsSpendings = document.getElementById('studentData').value;

    studentsSpendings = studentsSpendings.split(', ');

    let totalSpendings = studentsSpendings.reduce(function(accumulator, currentValue) {
        return parseInt(accumulator) + parseInt(currentValue);
    });

    document.getElementById('result').innerHTML = 'Total spendings are: ' + totalSpendings;
};